import produce, { freeze } from "immer";
import React from 'react';

export function useImmer(initialValue) {
  const [val, updateValue] = React.useState(() =>
    freeze(
      typeof initialValue === "function" ? initialValue() : initialValue,
      true
    )
  );
  return [
    val,
    (updater => {
      if (typeof updater === "function") updateValue(produce(updater));
      else updateValue(freeze(updater));
    }),
  ];
}
