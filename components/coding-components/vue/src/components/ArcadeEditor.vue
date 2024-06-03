<script setup>
import { ref, onMounted, toRaw } from "vue";

import { loadData } from "../utils/load-data";

// Read more about ref() at https://vuejs.org/api/reactivity-core.html#ref
const editor = ref(null);
const profile = ref(null);
const testData = ref(null);
const scrim = ref(null);

// Registers a callback to be called after the component has been mounted
// See: https://vuejs.org/api/composition-api-lifecycle.html#onmounted
onMounted(async () => {
  if (editor.value) {
    // Get data for the arcade editor profile and test data
    const data = await loadData();

    profile.value = {
      id: "popup",
      definitions: {
        $feature: data.featureLayer,
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer,
      },
    };

    testData.value = {
      profileVariableInstances: {
        $feature: data.featureSet.features[0],
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer.url,
      },
      spatialReference: {
        wkid: 4326,
      },
    };

    // Wait for the editorInstance to be defined
    const editorInstance = await editor.value.getEditorInstance();

    // Make changes to the editor's options
    editorInstance.updateOptions({
      // Enable the minimap in the editor
      // minimap: { enabled: true },
    });

    // Remove the scrim from the UI
    scrim.value.remove();
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
    // noop
  }
});
</script>

<!-- Using shorthand v-bind for script, profile, and testData  -->
<!-- Read more about v-bind at https://vuejs.org/api/built-in-directives.html#v-bind -->

<!-- Using shorthand v-on for scriptChange and diagnosticsChange events -->
<!-- Read more about v-on at https://vuejs.org/guide/essentials/event-handling.html -->

<!-- toRaw() is required for profile and testData objects -->
<!-- Read more about toRaw() https://vuejs.org/api/reactivity-advanced.html#toraw -->

<template>
  <div>
    <div class="editor-wrapper">
      <arcgis-arcade-editor
        ref="editor"
        :script="`$feature;`"
        :profile="toRaw(profile)"
        :testData="toRaw(testData)"
        @scriptChange="
          async (e) => {
            console.log('script:', e.detail);
            console.log('outputType on script:', await editor.getOutputType());
          }
        "
        @diagnosticsChange="
          (e) => {
            console.log('diagnostics:', e.detail);
          }
        "
      />
    </div>
    <calcite-scrim ref="scrim" loading />
  </div>
</template>
