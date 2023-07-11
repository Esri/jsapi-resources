import { useState, useEffect } from 'react';
import { watch } from '@arcgis/core/core/reactiveUtils';
import './center-component.css';

/**
 * React component that can be used in an ArcGIS JS SDK application.
 * This component dynamically displays the center of the map extent
 * @param {*} view an instance of a `Mapview` or `SceneView`
 * @param {string} id - The `id` of the components's parent HTML div element
 * @returns The components's HTML div
 */
const CenterComponent = ({ view, id }) => {
  const [center, setCenter] = useState(null);

  useEffect(() => {
    // Watch for changes on the View's Extent
    let handle = watch(
      () => view?.view?.extent,
      (value) => {
        const { latitude, longitude } = value.center;
        // Update the component's display
        setCenter(`${longitude.toFixed(4)}, ${latitude.toFixed(4)}`);
    });
    // Clean up any handles or event listeners
    // created in useEffect method
    return () => handle.remove();
  }, [view]);

 return <div id={id} className="center-component">Center: {center}</div>;
};

export default CenterComponent;
