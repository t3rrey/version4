import { createContext, useState, useCallback } from "react";

export const Context = createContext();

export function Provider(props) {
  const [state, setState] = useState({
    layers: [
      {
        name: "Background",
        isVisible: true,
      },
    ],
    config: {},
  });

  // Layers
  const addLayer = useCallback(
    () =>
      setState((state) => ({
        ...state,
        layers: [
          ...state.layers,
          {
            name: "Layer " + (state.layers.length + 1),
            isVisible: true,
          },
        ],
      })),
    []
  );

  const toggleLayer = useCallback((index, show) => {
    setState((state) => {
      const layers = JSON.parse(JSON.stringify(state.layers));
      const layer = layers[index];
      layer.isVisible = typeof show === "undefined" ? !layer.isVisible : show;

      return {
        ...state,
        layers,
      };
    });
  }, []);

  const removeLayer = () => {};

  // Options
  const setOption = useCallback(
    (option, value) =>
      setState((state) => ({
        ...state,
        config: {
          ...state.config,
          [option]: value,
        },
      })),
    []
  );

  // Context Value
  const contextValue = {
    state,
    setState,
    addLayer,
    removeLayer,
    toggleLayer,
    setOption,
  };

  console.log("state", state);

  return (
    <Context.Provider value={contextValue}> {props.children} </Context.Provider>
  );
}

export default Context;
