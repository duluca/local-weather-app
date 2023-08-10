// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing'

import { getTestBed } from '@angular/core/testing'
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
)

// All methods in mock declarations and providers
// will be automatically spied on their creation.
// https://ng-mocks.sudo.eu/extra/auto-spy
// ngMocks.autoSpy('jasmine'); // or jest
