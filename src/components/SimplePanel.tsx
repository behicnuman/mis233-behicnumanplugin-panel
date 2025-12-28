import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: 'Inter', 'Open Sans', Helvetica, Arial, sans-serif;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    `,
    textBox: css`
      position: absolute;
      bottom: 10px;
      left: 10px;
      padding: 8px;
      background: rgba(0, 0, 0, 0.3); /* Okunabilirliği artırmak için hafif arka plan */
      border-radius: 4px;
      color: white;
      z-index: 5;
    `,
    nameBox: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      z-index: 10;
      pointer-events: none;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({
  options,
  data,
  width,
  height,
  fieldConfig,
  id,
}) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);

  if (data.series.length === 0) {
    return (
      <PanelDataErrorView
        fieldConfig={fieldConfig}
        panelId={id}
        data={data}
        needsStringField
      />
    );
  }

  // Bonus 2: Dinamik Boyutlandırma Mantığı
  const getFontSize = (size: string) => {
    switch (size) {
      case 'sm': return '12px';
      case 'md': return '18px';
      case 'lg': return '24px';
      default: return '14px';
    }
  };

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {/* DEVELOPER BILGISI */}
      <div className={styles.nameBox}>
        <h3 style={{ margin: 0 }}>Behic Numan Oruc & Kaan Gunal</h3>
        <p style={{ margin: '5px 0 0 0', opacity: 0.8 }}>MIS 233 Final Project</p>
      </div>

      {/* ARKA PLAN GRAFIK */}
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <circle
          data-testid="simple-panel-circle"
          style={{ fill: theme.colors.primary.main, opacity: 0.6 }}
          r={Math.min(width, height) / 3} // Dinamik yarıçap
        />
      </svg>

      {/* ALT BILGI VE BONUS GOSTERIMI */}
      <div className={styles.textBox}>
        {/* Bonus 1 & 2: Toggle kontrolü ve Dinamik Boyut */}
        {options.showSeriesCount && (
          <div 
            data-testid="simple-panel-series-counter"
            style={{ 
              fontSize: getFontSize(options.seriesCountSize),
              fontWeight: 'bold',
              color: theme.colors.secondary.main 
            }}
          >
            Series Count: {data.series.length}
          </div>
        )}
        <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>
          Config Value: {options.text}
        </div>
      </div>
    </div>
  );
};