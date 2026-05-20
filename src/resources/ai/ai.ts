// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { Agents, PageInfo } from './agents';
import * as MemoriesAPI from './memories';
import { Memories } from './memories';
import * as AlertsAPI from './alerts/alerts';
import { Actor, Alerts } from './alerts/alerts';
import * as RunsAPI from './runs/runs';
import { Runs } from './runs/runs';

export class AI extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);
  memories: MemoriesAPI.Memories = new MemoriesAPI.Memories(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
}

AI.Agents = Agents;
AI.Alerts = Alerts;
AI.Memories = Memories;
AI.Runs = Runs;

export declare namespace AI {
  export { Agents as Agents, type PageInfo as PageInfo };

  export { Alerts as Alerts, type Actor as Actor };

  export { Memories as Memories };

  export { Runs as Runs };
}
