/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {RNPackage, TurboModulesFactory} from '@rnoh/react-native-openharmony/ts';
import type {TurboModule, TurboModuleContext} from '@rnoh/react-native-openharmony/ts';
import { TAG } from './sharedTypes';
import { AIRMapManager } from './AIRMaps/AIRMapManager';
import { AIRMapMarkerManager } from './AIRMaps/AIRMapMarkerManager';

const REACT_CLASS_AIRMAP_MANAGER = 'AIRMapManager';
const REACT_CLASS_AIRMAP_MARKER_MANAGER = 'AIRMapMarkerManager';

class MapsTurboModulesFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    console.log(TAG, '初始化 MapsTurboModulesFactory.createTurboModule=' + name)
    if (name === REACT_CLASS_AIRMAP_MANAGER) {
      return new AIRMapManager(this.ctx);
    } else if (name === REACT_CLASS_AIRMAP_MARKER_MANAGER){
      return new AIRMapMarkerManager(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === REACT_CLASS_AIRMAP_MANAGER || name === REACT_CLASS_AIRMAP_MARKER_MANAGER;
  }
}

export class MapsPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new MapsTurboModulesFactory(ctx);
  }
}
