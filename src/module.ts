import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    // Bonus: Kullanıcı paneldeki isminin rengini sağ menüden seçebilsin
    .addColorPicker({
      path: 'nameColor',
      name: 'Developer Name Color',
      description: 'Choose a color for the "Developed by" text',
      defaultValue: '#ffffff',
    })
    // Bonus: İnteraktif dairenin başlangıç şeffaflığını ayarlama
    .addSliderInput({
      path: 'circleOpacity',
      name: 'Circle Opacity',
      description: 'Adjust the transparency of the interactive circle',
      defaultValue: 0.5,
      settings: {
        min: 0.1,
        max: 1,
        step: 0.1,
      },
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    });
});