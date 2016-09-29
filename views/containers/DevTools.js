import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Inspector from 'redux-devtools-inspector';

export default createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h"
	             changePositionKey="ctrl-w"
	             changeMonitorKey="ctrl-m"
	>
		<Inspector />
		<LogMonitor />
	</DockMonitor>
);
