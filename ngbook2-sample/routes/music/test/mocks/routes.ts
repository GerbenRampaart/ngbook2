import {provide} from "angular2/core";
import {
  ROUTER_PROVIDERS,
  Location,
  LocationStrategy,
  Instruction,
  ComponentInstruction,
  Router,
  RouteParams
} from "angular2/router";
import {ResolvedInstruction} from 'angular2/src/router/instruction';
import {SpyObject} from 'angular2/testing_internal';


export class MockRouteParams extends SpyObject {
  private ROUTE_PARAMS = {};

  constructor() { super(RouteParams); }

  set(key: string, value: string) {
    this.ROUTE_PARAMS[key] = value;
  }

  get(key: string) {
    return this.ROUTE_PARAMS[key];
  }
}
export class MockRouter extends SpyObject {
  constructor() { super(Router); }
  isRouteActive(s) { return true; }
  generate(s) {
    return new ResolvedInstruction(new ComponentInstruction('detail', [], null, null, true, '0'), null, {});
  }
}
export class MockLocationStrategy extends SpyObject {
  constructor() { super(LocationStrategy); }
}
export class MockLocation extends SpyObject {
  constructor() { super(Location); }
}

export class MockRouterProvider {
  mockRouter: MockRouter = new MockRouter();
  mockRouteParams: MockRouteParams = new MockRouteParams();
  mockLocationStrategy: MockLocationStrategy = new MockLocationStrategy();
  mockLocation: MockLocation = new MockLocation();

  setRouteParam(key: string, value: any) {
    this.mockRouteParams.set(key, value);
  }

  getProviders(): Array<any> {
    return [
      provide(Router, {useValue: this.mockRouter}),
      provide(RouteParams, {useValue: this.mockRouteParams}),
      provide(Location, {useValue: this.mockLocation}),
      provide(LocationStrategy, {useValue: this.mockLocationStrategy})
    ];
  }
}
