import { useState, useEffect } from 'react';
import { watch } from '@arcgis/core/core/reactiveUtils';
import './center-widget.css';

/**
 * React component that can be used as an ArcGIS JS SDK widget. 
 * This widget dynamically displays the center of the map extent
 * @param {*} view an instance of a `Mapview` or `SceneView`
 * @param {string} id - The `id` of the widget's parent HTML div element
 * @returns The widget's HTML div
 */
const CenterWidget = ({ view, id }) => {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    // Watch for changes on the View's Extent
    watch(
      () => view?.view?.extent,
      (value) => {
        const { latitude, longitude } = value.center;
        // Update the widget's display
        setCenter(`${longitude.toFixed(4)}, ${latitude.toFixed(4)}`);
    }); 
  });

 return <div id={id} className="center-widget">Center: {center}</div>;
};

export default CenterWidget;