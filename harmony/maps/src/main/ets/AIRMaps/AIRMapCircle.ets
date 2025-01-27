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

import { ComponentBuilderContext, RNComponentContext } from '@rnoh/react-native-openharmony';
import { AIRMapCircleDescriptor } from './AIRMapDescriptorTypes';
import { MapsManager } from '../MapsManager';
import { LWLog } from '../LWLog';
import { map } from '@kit.MapKit';

export const AIR_MAP_CIRCLE_TYPE: string = "AIRMapCircle"



@Component
export struct AIRMapCircle {
  ctx!: RNComponentContext
  tag: number = 0
  @BuilderParam buildCustomComponent: (componentBuilderContext: ComponentBuilderContext) => void
  @State descriptor: AIRMapCircleDescriptor = {} as AIRMapCircleDescriptor
  private unregisterDescriptorChangesListener?: () => void = undefined
  private instance?: map.MapCircle;

  aboutToAppear() {
    LWLog('AIRMapCircle.aboutToAppear 初始化 AIRMapCircle...')
    this.descriptor = this.ctx.descriptorRegistry.getDescriptor<AIRMapCircleDescriptor>(this.tag)
    this.unregisterDescriptorChangesListener = this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (newDescriptor) => {
        this.descriptor = (newDescriptor as AIRMapCircleDescriptor)
        this.instance?.setCenter(this.descriptor.rawProps.center);
        this.instance?.setRadius(this.descriptor.rawProps.radius);
        this.instance?.setStrokeWidth(this.descriptor.rawProps.strokeWidth);
        this.instance?.setStrokeColor(MapsManager.getInstance().colorCovertHex(this.descriptor.rawProps.strokeColor));
        this.instance?.setFillColor(MapsManager.getInstance().colorCovertHex(this.descriptor.rawProps.fillColor));
        this.instance?.setZIndex(this.descriptor.rawProps.zIndex);
        this.instance?.setPatterns(MapsManager.getInstance().lineDashPatternConvert(this.descriptor.rawProps.lineDashPattern));
      }
    )

    MapsManager.getInstance().addCircle(this.descriptor, this.ctx)?.then(instance => {
      this.instance = instance;
    });
  }

  aboutToDisappear() {
    this.unregisterDescriptorChangesListener?.()
    this.instance?.remove();
  }

  build() {
  }
}
