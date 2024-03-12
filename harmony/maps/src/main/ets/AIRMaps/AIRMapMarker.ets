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

import { Descriptor, ComponentBuilderContext, ViewBaseProps, ViewRawProps, rnComponentFactoryBuilder, Tag,
  RNViewManager } from 'rnoh';
import { RNOHContext, RNViewBase } from 'rnoh'
import { ImageURISource, Region, TAG } from '../sharedTypes';
import { MapsManager } from '../MapsManager';
import { mapCommon, map } from '@kit.MapKit';
import { AIRMapMarkerDescriptor } from './AIRMapDescriptorTypes';
import { LWLog } from '../LWLog';

export const AIR_MAP_MARKER_TYPE: string = "AIRMapMarker"

@Component
export struct AIRMapMarker {
  ctx!: RNOHContext
  tag: number = 0
  @BuilderParam buildCustomComponent: (componentBuilderContext: ComponentBuilderContext) => void
  @State descriptor: AIRMapMarkerDescriptor = {} as AIRMapMarkerDescriptor
  protected cleanUpCallbacks: (() => void)[] = []

  aboutToAppear() {
    LWLog('AIRMapMarker.aboutToAppear 初始化 AIRMapMarker...')
    this.descriptor = this.ctx.descriptorRegistry.getDescriptor<AIRMapMarkerDescriptor>(this.tag)
    this.cleanUpCallbacks.push(this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (newDescriptor) => {
        this.descriptor = (newDescriptor as AIRMapMarkerDescriptor)
       LWLog('AIRMapMarker.subscribeToDescriptorChanges=' + JSON.stringify(this.descriptor))
        MapsManager.getInstance().addMarker(this, true);
      }
    ));
    this.cleanUpCallbacks.push(this.ctx.componentCommandReceiver.registerCommandCallback(
      this.tag,
      (command, args: [ESObject, ESObject, ESObject]) => {
       LWLog('AIRMapMarker.aboutToAppear----------command=' + command, JSON.stringify(args))
        if (command === 'showCallout') {
          if (this.marker) {
            this.marker.setInfoWindowVisible(true);
          }
        } else if (command === 'hideCallout') {
          if (this.marker) {
            this.marker.setInfoWindowVisible(false);
          }
        } else if (command === 'redrawCallout') {
          //todo 华为地图不支持
        } else if (command === 'animateMarkerToCoordinate') {
          //todo 华为地图不支持
        } else if (command === 'redraw') {
          //todo 华为地图不支持
        }
      }));

    if (MapsManager.getInstance().isInitMapController()) {
      MapsManager.getInstance().addMarker(this, false);
    }else {
      setTimeout(()=>{
        MapsManager.getInstance().addMarker(this, false);
      }, 500)
    }
  }

  private marker?: map.Marker;

  public setMarker(marker: map.Marker){
    this.marker = marker;
  }

  aboutToDisappear() {
    this.cleanUpCallbacks.forEach(cb => cb())
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      Stack(){
        ForEach(this.descriptor.childrenTags, (tag: Tag) => {
          rnComponentFactoryBuilder(this.ctx, tag, this.ctx.rnInstance.getComponentNameFromDescriptorType(this.ctx.descriptorRegistry.getDescriptor(tag)?.type))
        }, (tag: Tag) => tag.toString())
      }
    }
  }
}
