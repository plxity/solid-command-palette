import { Component, For, Show } from 'solid-js';
import { useStore } from './StoreContext';
import { CommandPalettePortal } from './CommandPalettePortal';
import styles from './CommandPalette.module.css';

export const CommandPalette: Component = () => {
  const [state] = useStore();

  return (
    <CommandPalettePortal>
      <Show when={state.visibility === 'opened'}>
        <div class={styles.wrapper}>
          <ul>
            <For each={Object.values(state.actions)} fallback={<div>No Actions</div>}>
              {(action) => {
                return (
                  <li>
                    <button
                      onClick={() => {
                        action.run({ actionsContext: state.actionsContext });
                      }}
                    >
                      Run Action {action.id}
                    </button>
                  </li>
                );
              }}
            </For>
          </ul>
        </div>
      </Show>
    </CommandPalettePortal>
  );
};
