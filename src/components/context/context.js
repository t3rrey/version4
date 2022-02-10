import { createContext, useState, useEffect, useCallback } from "react";

export const Context = createContext();

export function Provider(props) {
  const [state, setState] = useState({
    layers: [],
    config: {},
  });

  // Layers
  const addLayer = useCallback(() =>
    setState((state) => ({
      ...state,
      layers: [...state.layers, "Layer " + (state.layers.length + 1)],
    }))
  );

  const removeLayer = () => {};

  // Options
  const setOption = useCallback((option, value) =>
    setState((state) => ({
      ...state,
      config: {
        ...state.config,
        [option]: value,
      },
    }))
  );

  // Context Value
  const contextValue = { state, setState, addLayer, removeLayer, setOption };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export default Context;
