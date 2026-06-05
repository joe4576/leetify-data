/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @example {"privacy_mode":"public","winrate":0.6429,"total_matches":2361,"first_match_date":"2020-01-01T19:08:39.000Z","name":"Slinky","bans":[{"platform":"faceit","platform_nickname":"extrasense","banned_since":"2022-10-17T13:26:12.018Z"}],"steam64_id":"76561197969209908","id":"e50a982e-d8ec-4627-996f-017ed9d7162e","ranks":{"leetify":2.12,"premier":19309,"faceit":9,"faceit_elo":null,"wingman":17,"renown":16482,"competitive":[{"map_name":"de_nuke","rank":14},{"map_name":"de_mills","rank":0}]},"rating":{"aim":60.2568,"positioning":57.1424,"utility":70.1944,"clutch":0.0938,"opening":-0.0024,"ct_leetify":0.0176,"t_leetify":0.0248},"stats":{"accuracy_enemy_spotted":34.3927,"accuracy_head":18.0232,"counter_strafing_good_shots_ratio":80.7065,"ct_opening_aggression_success_rate":36.9767,"ct_opening_duel_success_percentage":42.4699,"flashbang_hit_foe_avg_duration":3.0482,"flashbang_hit_foe_per_flashbang":0.7055,"flashbang_hit_friend_per_flashbang":0.3976,"flashbang_leading_to_kill":12.7502,"flashbang_thrown":14.5015,"he_foes_damage_avg":7.4804,"he_friends_damage_avg":0.6348,"preaim":12.0408,"reaction_time_ms":586.7643,"spray_accuracy":37.0909,"t_opening_aggression_success_rate":43.4608,"t_opening_duel_success_percentage":49.8248,"traded_deaths_success_percentage":51.5246,"trade_kill_opportunities_per_round":0.3223,"trade_kills_success_percentage":45.8348,"utility_on_death_avg":152.9369},"recent_matches":[{"id":"f78ae802-9044-4aa1-be47-d8e0193c4bd7","finished_at":"2025-07-02T21:06:50.000Z","data_source":"renown","outcome":"win","rank":0,"rank_type":null,"map_name":"de_inferno","leetify_rating":-0.0014,"score":[13,6],"preaim":11.22,"reaction_time_ms":664,"accuracy_enemy_spotted":35.59,"accuracy_head":19.64,"spray_accuracy":30}],"recent_teammates":[{"steam64_id":"76561197989048400","recent_matches_count":35},{"steam64_id":"76561197975803008","recent_matches_count":42}]} */
export interface ProfileResponse {
  privacy_mode?: string;
  winrate?: number;
  total_matches?: number;
  /** @format date-time */
  first_match_date?: string | null;
  name?: string;
  bans?: PlatformBanInfo[];
  steam64_id?: string;
  id?: string | null;
  ranks?: Ranks;
  rating?: Rating;
  stats?: Stats;
  recent_matches?: RecentMatch[];
  recent_teammates?: RecentTeammate[];
}

export interface Ranks {
  leetify?: number | null;
  premier?: number | null;
  faceit?: number | null;
  faceit_elo?: number | null;
  wingman?: number | null;
  renown?: number | null;
  competitive?: CompetitiveRank[];
}

export interface CompetitiveRank {
  map_name?: string;
  rank?: number;
}

export interface Rating {
  aim?: number;
  positioning?: number;
  utility?: number;
  clutch?: number;
  opening?: number;
  ct_leetify?: number;
  t_leetify?: number;
}

export interface Stats {
  accuracy_enemy_spotted?: number;
  accuracy_head?: number;
  counter_strafing_good_shots_ratio?: number;
  ct_opening_aggression_success_rate?: number;
  ct_opening_duel_success_percentage?: number;
  flashbang_hit_foe_avg_duration?: number;
  flashbang_hit_foe_per_flashbang?: number;
  flashbang_hit_friend_per_flashbang?: number;
  flashbang_leading_to_kill?: number;
  flashbang_thrown?: number;
  he_foes_damage_avg?: number;
  he_friends_damage_avg?: number;
  preaim?: number;
  reaction_time_ms?: number;
  spray_accuracy?: number;
  t_opening_aggression_success_rate?: number;
  t_opening_duel_success_percentage?: number;
  traded_deaths_success_percentage?: number;
  trade_kill_opportunities_per_round?: number;
  trade_kills_success_percentage?: number;
  utility_on_death_avg?: number;
}

/** @example {"id":"match123","finished_at":"2023-12-01T15:30:00Z","data_source":"CS_API","outcome":"win","rank":14,"rank_type":"matchmaking","map_name":"de_dust2","leetify_rating":85,"score":[16,12],"preaim":0.75,"reaction_time_ms":180,"accuracy_enemy_spotted":0.68,"accuracy_head":0.48,"spray_accuracy":0.71} */
export interface RecentMatch {
  id?: string;
  /** @format date-time */
  finished_at?: string;
  data_source?: string;
  outcome?: string;
  rank?: number;
  rank_type?: string;
  map_name?: string;
  leetify_rating?: number;
  /**
   * @maxItems 2
   * @minItems 2
   */
  score?: number[];
  preaim?: number;
  reaction_time_ms?: number;
  accuracy_enemy_spotted?: number;
  accuracy_head?: number;
  spray_accuracy?: number;
}

export interface RecentTeammate {
  steam64_id?: string;
  recent_matches_count?: number;
}

export interface PlatformBanInfo {
  platform: string;
  platform_nickname: string;
  /** @format date-time */
  banned_since: string;
}

/** @example {"id":"e30ce267-5b26-48ac-8ad5-68d97a53884b","finished_at":"2025-04-15T11:58:52.000Z","data_source":"matchmaking","data_source_match_id":"CSGO-CQNLr-6sp23-JwjmS-kQPwR-tm7SA","map_name":"de_nuke","has_banned_player":true,"team_scores":[{"team_number":2,"score":3},{"team_number":3,"score":13}],"stats":[{"steam64_id":"76561199536301058","name":"reaxl","mvps":6,"preaim":12.2612,"reaction_time":0.5938,"accuracy":0.3641,"accuracy_enemy_spotted":0.5446,"accuracy_head":0.2429,"shots_fired_enemy_spotted":112,"shots_fired":195,"shots_hit_enemy_spotted":61,"shots_hit_friend":0,"shots_hit_friend_head":0,"shots_hit_foe":71,"shots_hit_foe_head":0,"utility_on_death_avg":237.5,"he_foes_damage_avg":5.6667,"he_friends_damage_avg":0,"he_thrown":3,"molotov_thrown":5,"smoke_thrown":1,"counter_strafing_shots_all":94,"counter_strafing_shots_bad":8,"counter_strafing_shots_good":86,"counter_strafing_shots_good_ratio":0.9149,"flashbang_hit_foe":2,"flashbang_leading_to_kill":0,"flashbang_hit_foe_avg_duration":3.1212,"flashbang_hit_friend":3,"flashbang_thrown":8,"flash_assist":0,"score":58,"initial_team_number":3,"spray_accuracy":0.4773,"total_kills":26,"total_deaths":8,"kd_ratio":3.25,"rounds_survived":8,"rounds_survived_percentage":0.5,"dpr":160.81,"total_assists":3,"total_damage":2573,"leetify_rating":0.1232,"ct_leetify_rating":0.0971,"t_leetify_rating":0.2014,"multi1k":5,"multi2k":4,"multi3k":3,"multi4k":1,"multi5k":0,"rounds_count":16,"rounds_won":13,"rounds_lost":3,"total_hs_kills":16,"trade_kill_opportunities":7,"trade_kill_attempts":6,"trade_kills_succeed":3,"trade_kill_attempts_percentage":0.8571,"trade_kills_success_percentage":0.5,"trade_kill_opportunities_per_round":0.3182,"traded_death_opportunities":8,"traded_death_attempts":7,"traded_deaths_succeed":4,"traded_death_attempts_percentage":0.875,"traded_deaths_success_percentage":0.5714,"traded_deaths_opportunities_per_round":0.3636}]} */
export interface MatchDetailsResponse {
  id?: string;
  /** @format date-time */
  finished_at?: string;
  data_source?: string;
  data_source_match_id?: string;
  map_name?: string;
  has_banned_player?: boolean;
  /**
   * @maxItems 2
   * @minItems 2
   */
  team_scores?: TeamScore[];
  stats?: PlayerStats[];
}

export interface TeamScore {
  team_number?: number;
  score?: number;
}

export interface PlayerStats {
  steam64_id?: string;
  name?: string;
  mvps?: number;
  preaim?: number;
  reaction_time?: number;
  accuracy?: number;
  accuracy_enemy_spotted?: number;
  accuracy_head?: number;
  shots_fired_enemy_spotted?: number;
  shots_fired?: number;
  shots_hit_enemy_spotted?: number;
  shots_hit_friend?: number;
  shots_hit_friend_head?: number;
  shots_hit_foe?: number;
  shots_hit_foe_head?: number;
  utility_on_death_avg?: number;
  he_foes_damage_avg?: number;
  he_friends_damage_avg?: number;
  he_thrown?: number;
  molotov_thrown?: number;
  smoke_thrown?: number;
  counter_strafing_shots_all?: number;
  counter_strafing_shots_bad?: number;
  counter_strafing_shots_good?: number;
  counter_strafing_shots_good_ratio?: number;
  flashbang_hit_foe?: number;
  flashbang_leading_to_kill?: number;
  flashbang_hit_foe_avg_duration?: number;
  flashbang_hit_friend?: number;
  flashbang_thrown?: number;
  flash_assist?: number;
  score?: number;
  initial_team_number?: number;
  spray_accuracy?: number;
  total_kills?: number;
  total_deaths?: number;
  kd_ratio?: number;
  rounds_survived?: number;
  rounds_survived_percentage?: number;
  dpr?: number;
  total_assists?: number;
  total_damage?: number;
  leetify_rating?: number | null;
  ct_leetify_rating?: number | null;
  t_leetify_rating?: number | null;
  multi1k?: number;
  multi2k?: number;
  multi3k?: number;
  multi4k?: number;
  multi5k?: number;
  rounds_count?: number;
  rounds_won?: number;
  rounds_lost?: number;
  total_hs_kills?: number;
  trade_kill_opportunities?: number;
  trade_kill_attempts?: number;
  trade_kills_succeed?: number;
  trade_kill_attempts_percentage?: number;
  trade_kills_success_percentage?: number;
  trade_kill_opportunities_per_round?: number;
  traded_death_opportunities?: number;
  traded_death_attempts?: number;
  traded_deaths_succeed?: number;
  traded_death_attempts_percentage?: number;
  traded_deaths_success_percentage?: number;
  traded_deaths_opportunities_per_round?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<
  D extends unknown,
  E extends unknown = unknown,
> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api-public.cs-prod.leetify.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Leetify Public CS API
 * @baseUrl https://api-public.cs-prod.leetify.com
 *
 * Leetify Public CS API aligns with the privacy settings from the main Leetify Product APIs.
 *
 * By using the public API, you agree to adhere to our [Developer Guidelines](https://leetify.com/blog/leetify-api-developer-guidelines/)
 *
 * ### Obtaining API Key
 *
 * Developers need to sign their requests with an API key which can be obtained at [leetify.com/app/developer](https://leetify.com/app/developer). The API key should be passed as the value for either the `Authorization` or `_leetify_key` header. While it is possible to use the API without a key, such requests will be subject to increased rate limits.
 *
 * You can validate your API key by making a GET request to `/api-key/validate` with your key in the `Authorization`, with the value `Bearer <key>`, or `_leetify_key` header. The endpoint will return:
 * - 200 status if the key is valid
 * - 401 status if the key is invalid or missing
 * - 500 status if there was a server error
 */
export class LeetifyApi<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  v3 = {
    /**
     * No description
     *
     * @tags player
     * @name ProfileList
     * @summary Get player profile
     * @request GET:/v3/profile
     */
    profileList: (
      query?: {
        /** Steam64 ID of the player */
        steam64_id?: string;
        /** Leetify User ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProfileResponse, any>({
        path: `/v3/profile`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags player
     * @name ProfileMatchesList
     * @summary Get player match history
     * @request GET:/v3/profile/matches
     */
    profileMatchesList: (
      query?: {
        /** Steam64 ID of the player */
        steam64_id?: string;
        /** Leetify User ID */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MatchDetailsResponse[], any>({
        path: `/v3/profile/matches`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  v2 = {
    /**
     * No description
     *
     * @tags matches
     * @name MatchesDetail
     * @summary Get match details by game ID
     * @request GET:/v2/matches/{gameId}
     */
    matchesDetail: (gameId: string, params: RequestParams = {}) =>
      this.request<MatchDetailsResponse, any>({
        path: `/v2/matches/${gameId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags matches
     * @name MatchesDetail2
     * @summary Get match details by data source and data source ID
     * @request GET:/v2/matches/{dataSource}/{dataSourceId}
     * @originalName matchesDetail
     * @duplicate
     */
    matchesDetail2: (
      dataSource: string,
      dataSourceId: string,
      params: RequestParams = {},
    ) =>
      this.request<MatchDetailsResponse, any>({
        path: `/v2/matches/${dataSource}/${dataSourceId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
