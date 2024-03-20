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

import { TurboModule, RNOHError } from 'rnoh/ts';
import { MapsTurboManager } from '../MapsTurboManager';
import { Camera, LatLng, Point, Region, TAG } from '../sharedTypes';

export class AIRMapMarkerManager extends TurboModule {

  /**
   * Shows the callout for this marker
   */
  public showCallout(){
    MapsTurboManager.getInstance().showCallout();
  }

  /**
   * Hides the callout for this marker
   */
  public hideCallout(){
    MapsTurboManager.getInstance().hideCallout();
  }

  /**
   * Causes a redraw of the marker's callout. Useful for Google Maps on iOS. Note: iOS only.
   */
  public redrawCallout(){
    //todo 华为地图不支持
  }

  /**
   * Animates marker movement. Note: Android only
   */
  public animateMarkerToCoordinate(coordinate: LatLng, duration: number){
    //todo 华为地图不支持
  }

  /**
   * Causes a redraw of the marker. Useful when there are updates to the marker and tracksViewChanges comes with a cost that is too high.
   */
  public redraw(){
    MapsTurboManager.getInstance().redraw();
  }
}
