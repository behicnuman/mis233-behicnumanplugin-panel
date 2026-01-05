import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    `,
    nameBox: css`
      position: absolute;
      top: 20px;
      text-align: center;
      z-index: 10;
      background: rgba(0,0,0,0.2);
      padding: 10px;
      border-radius: 8px;
    `,
    interactiveCircle: css`
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
      }
    `,
    dataDisplay: css`
      z-index: 5;
      text-align: center;
      font-weight: bold;
      pointer-events: none;
    `,
    counterContainer: css`
      margin-top: 10px;
      padding: 4px 8px;
      background: rgba(0,0,0,0.4);
      border-radius: 4px;
      font-weight: bold;
    `
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);
  const [isClicked, setIsClicked] = useState(false);

  // Veri gelmediğinde sadece isminin göründüğü bir ekran döndürür (Mandatory requirement koruması)
  if (data.series.length === 0) {
    return (
      <div className={cx(styles.wrapper, css`width: ${width}px; height: ${height}px;`)}>
        <div className={styles.nameBox}>
           <div style={{ color: options.nameColor, fontSize: '16px', fontWeight: 'bold' }}>
              Developed by Behic Numan Oruc
           </div>
           <div style={{ color: theme.colors.text.secondary, fontSize: '11px' }}>Waiting for Data Query...</div>
        </div>
        <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} />
      </div>
    );
  }

  // Bonus: Gerçek veriden son değeri çekme
  const lastValue = data.series[0].fields[1]?.state?.lastStringValue || data.series[0].fields[1]?.values.get(data.series[0].fields[1].values.length - 1) || "0";

  return (
    <div className={cx(styles.wrapper, css`width: ${width}px; height: ${height}px;`)}>
      
      {/* MANDATORY: Student Name + Configuration Bonus */}
      <div className={styles.nameBox}>
        <div style={{ color: options.nameColor, fontSize: '16px', fontWeight: 'bold', transition: 'color 0.3s ease' }}>
          Developed by Behic Numan Oruc
        </div>
        
        {/* BONUS: Series Counter - Veri gelince burada görünecek */}
        {options.showSeriesCount && (
          <div className={styles.counterContainer} style={{ 
            fontSize: options.seriesCountSize === 'sm' ? '12px' : options.seriesCountSize === 'md' ? '16px' : '20px',
            color: theme.colors.secondary.main 
          }}>
            Series Count: {data.series.length}
          </div>
        )}
      </div>

      {/* BONUS: Data Rendering */}
      <div className={styles.dataDisplay}>
        <div style={{ fontSize: '32px', color: theme.colors.text.primary }}>{lastValue}</div>
        <div style={{ fontSize: '12px', opacity: 0.7 }}>Live Query Result</div>
      </div>

      {/* BONUS: Interactivity & Configuration */}
      <svg width={width} height={height} style={{ position: 'absolute' }} viewBox={`0 0 ${width} ${height}`}>
        <circle
          className={styles.interactiveCircle}
          cx={width / 2}
          cy={height / 2}
          r={Math.min(width, height) / 4}
          fill={isClicked ? theme.colors.warning.main : theme.colors.primary.main}
          onClick={() => setIsClicked(!isClicked)}
          opacity={options.circleOpacity}
        />
      </svg>
    </div>
  );
};