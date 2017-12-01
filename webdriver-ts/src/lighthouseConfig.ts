import * as path from 'path';

export const lhConfig = {
  artifacts: {
    traces: {
      defaultPass: path.join(__dirname, '../', './thistrace.json')
    },
    devtoolsLogs: {
      defaultPass: path.join(__dirname, '../', './thisdevtoolslogs.json')
    }
  },

  audits: [
    'speed-index-metric',
    'estimated-input-latency',
    'first-meaningful-paint',
    'time-to-first-byte',
    'first-interactive',
    'consistently-interactive',
    'user-timings',
    'critical-request-chains',

    'byte-efficiency/total-byte-weight',
    'screenshot-thumbnails',
    'mainthread-work-breakdown',
    'bootup-time',

  ],

  groups: {
    'perf-metric': {
      title: 'Metrics',
      description: "These metrics encapsulate your app's performance across a number of dimensions."
    },
    'perf-hint': {
      title: 'Opportunities',
      description:
        'These are opportunities to speed up your application by optimizing the following resources.'
    },
    'perf-info': {
      title: 'Diagnostics',
      description: 'More information about the performance of your application.'
    }
  },
  categories: {
    performance: {
      name: 'Performance',
      description:
        "These encapsulate your app's current performance and opportunities to improve it.",
      audits: [
        {id: 'first-meaningful-paint', weight: 5, group: 'perf-metric'},
        {id: 'first-interactive', weight: 5, group: 'perf-metric'},
        {id: 'consistently-interactive', weight: 5, group: 'perf-metric'},
        {id: 'speed-index-metric', weight: 1, group: 'perf-metric'},
        {id: 'estimated-input-latency', weight: 1, group: 'perf-metric'},

        {id: 'time-to-first-byte', weight: 0, group: 'perf-hint'},

        {id: 'total-byte-weight', weight: 0, group: 'perf-info'},

        // {id: 'dom-size', weight: 0, group: 'perf-info'},
        {id: 'critical-request-chains', weight: 0, group: 'perf-info'},
        {id: 'user-timings', weight: 0, group: 'perf-info'},
        {id: 'bootup-time', weight: 0, group: 'perf-info'},
        {id: 'screenshot-thumbnails', weight: 0},
        {id: 'mainthread-work-breakdown', weight: 0, group: 'perf-info'}
      ]
    }
  }
};
