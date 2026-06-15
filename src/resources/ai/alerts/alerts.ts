// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from '../../identity/roles';
import * as ActionsAPI from './actions';
import { Actions } from './actions';

export class Alerts extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

/**
 * Reference to an actor (user, API key, or agent).
 */
export interface Actor {
  /**
   * Actor ID.
   */
  id: string;

  /**
   * Human-readable handle (`email` for users, `redacted_value` for API keys, `slug`
   * for agents).
   */
  handle: string | null;

  /**
   * Display name.
   */
  name: string | null;

  /**
   * Resource type identifier.
   */
  object: 'actor';

  /**
   * Role resource.
   */
  role: RolesAPI.Role | null;

  /**
   * Actor type.
   */
  type: 'user' | 'api_key' | 'agent';
}

Alerts.Actions = Actions;

export declare namespace Alerts {
  export { type Actor as Actor };

  export { Actions as Actions };
}
