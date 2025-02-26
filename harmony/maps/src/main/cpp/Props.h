
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsH.js
 */
#pragma once

#include <js_native_api_types.h>
#include <jsi/jsi.h>
#include <list>
#include <react/renderer/components/view/ViewProps.h>
#include <react/renderer/core/PropsParserContext.h>

#include <react/renderer/core/propsConversions.h>
#include <react/debug/react_native_assert.h>

namespace facebook {
namespace react {

    enum class PaddingAdjustmentBehavior { always, automatic, never };
    enum class UserLocationPriority { balanced, high, low, passive};

    class JSI_EXPORT AIRMapProps final : public ViewProps {
    public:
        AIRMapProps() = default;
        AIRMapProps(const PropsParserContext &context, const AIRMapProps &sourceProps, const RawProps &rawProps);

    #pragma mark - Props
    public:
        std::string provider{};
        folly::dynamic region{};
        folly::dynamic initialRegion{};
        folly::dynamic camera{};
        folly::dynamic initialCamera{};
        folly::dynamic mapPadding{};
        folly::dynamic paddingAdjustmentBehavior{static_cast<int>(PaddingAdjustmentBehavior::never)};
        bool liteMode{};
        std::string mapType{"standard"};
        folly::dynamic customMapStyle{};
        std::string userInterfaceStyle{};
        bool showsUserLocation{};
        folly::dynamic userLocationPriority{static_cast<int>(UserLocationPriority::high)};
        int userLocationUpdateInterval{};
        int userLocationFastestInterval{};
        std::string userLocationAnnotationTitle{};
        bool followsUserLocation{};
        bool userLocationCalloutEnabled{};
        bool showsMyLocationButton{};
        bool showsPointsOfInterest{};
        bool showsCompass{};
        bool showsScale{};
        bool showsBuildings{};
        bool showsTraffic{};
        bool showsIndoors{};
        bool showsIndoorLevelPicker{};
        bool zoomEnabled{};
        bool zoomTapEnabled{};
        bool zoomControlEnabled{};
        int minZoomLevel{};
        int maxZoomLevel{};
        bool rotateEnabled{};
        bool scrollEnabled{};
        bool scrollDuringRotateOrZoomEnabled{};
        bool pitchEnabled{};
        bool toolbarEnabled{};
        bool cacheEnabled{};
        bool loadingEnabled{};
        SharedColor loadingIndicatorColor{};
        SharedColor loadingBackgroundColor{};
        SharedColor tintColor{};
        bool moveOnMarkerPress{};
        folly::dynamic legalLabelInsets{};
        std::string kmlSrc{};
        folly::dynamic compassOffset{};
        bool isAccessibilityElement{};
        // AIRMap
        std::string customMapStyleString{};
        std::string googleMapId{};
    };

    class JSI_EXPORT AIRMapMarkerProps final : public ViewProps {
    public:
        AIRMapMarkerProps() = default;
        AIRMapMarkerProps(const PropsParserContext &context, const AIRMapMarkerProps &sourceProps, const RawProps &rawProps);

    #pragma mark - Props
        std::string title{};
        std::string description{};
        folly::dynamic coordinate{};
        float rotation{};
        bool draggable{};
        bool flat{};
        std::string image{};
        folly::dynamic calloutAnchor{};
        folly::dynamic anchor{};
        int zIndex{};
        bool tappable{};
        float opacity{};
    };

    class JSI_EXPORT AIRMapPolylineProps final : public ViewProps {
    public:
        AIRMapPolylineProps() = default;
        AIRMapPolylineProps(const PropsParserContext &context, const AIRMapPolylineProps &sourceProps,
                            const RawProps &rawProps);

    #pragma mark - Props
        folly::dynamic coordinates{};
        std::string strokeColor{};
        folly::dynamic strokeColors{};
        int strokeWidth{};
        folly::dynamic lineDashPattern{};
        int zIndex{};
        bool geodesic{};
        bool tappable{};
        std::string lineJoin{};
        std::string lineCap{};
    };

    class JSI_EXPORT AIRMapPolygonProps final : public ViewProps {
    public:
        AIRMapPolygonProps() = default;
        AIRMapPolygonProps(const PropsParserContext &context, const AIRMapPolygonProps &sourceProps,
                           const RawProps &rawProps);

    #pragma mark - Props
        folly::dynamic coordinates{};
        std::string fillColor{};
        std::string strokeColor{};
        int strokeWidth{};
        bool geodesic{};
        folly::dynamic lineDashPattern{};
        folly::dynamic holes{};
        int zIndex{};
        bool tappable{};
        std::string lineJoin{};
        std::string lineCap{};
    };

    class JSI_EXPORT AIRMapCircleProps final : public ViewProps {
    public:
        AIRMapCircleProps() = default;
        AIRMapCircleProps(const PropsParserContext &context, const AIRMapCircleProps &sourceProps,
                          const RawProps &rawProps);

    #pragma mark - Props
        folly::dynamic center{};
        int radius{};
        std::string fillColor{};
        std::string strokeColor{};
        int zIndex{};
        int strokeWidth{};
        folly::dynamic lineDashPattern{};
    };

    class JSI_EXPORT AIRMapCalloutProps final : public ViewProps {
    public:
        AIRMapCalloutProps() = default;
        AIRMapCalloutProps(const PropsParserContext &context, const AIRMapCalloutProps &sourceProps,
                           const RawProps &rawProps);

    #pragma mark - Props
        bool tooltip{};
        bool alphaHitTest{};
    };

    class JSI_EXPORT AIRMapCalloutSubviewProps final : public ViewProps {
    public:
        AIRMapCalloutSubviewProps() = default;
        AIRMapCalloutSubviewProps(const PropsParserContext &context, const AIRMapCalloutSubviewProps &sourceProps,
                                  const RawProps &rawProps);

    #pragma mark - Props
    };

    class JSI_EXPORT GeojsonProps final : public ViewProps {
    public:
        GeojsonProps() = default;
        GeojsonProps(const PropsParserContext &context, const GeojsonProps &sourceProps, const RawProps &rawProps);

    #pragma mark - Props
        folly::dynamic geojson{};
        std::string strokeColor{};
        std::string fillColor{};
        int strokeWidth{};
        std::string color{};
        int lineDashPhase{};
        folly::dynamic lineDashPattern{};
        std::string lineCap{};
        std::string lineJoin{};
        int miterLimit{};
        int zIndex{};
        folly::dynamic markerComponent{};
        std::string title{};
        bool tracksViewChanges{};
    };

    class JSI_EXPORT AIRMapUrlTileProps final : public ViewProps {
    public:
        AIRMapUrlTileProps() = default;
        AIRMapUrlTileProps(const PropsParserContext &context, const AIRMapUrlTileProps &sourceProps,
                           const RawProps &rawProps);

    #pragma mark - Props
        std::string urlTemplate{};
        int minimumZ{};
        int maximumZ{};
        int maximumNativeZ{};
        int zIndex{};
        int tileSize{};
        bool doubleTileSize{};
        bool shouldReplaceMapContent{};
        bool flipY{};
        std::string tileCachePath{};
        int tileCacheMaxAge{};
        bool offlineMode{};
        int opacity{};
    };

    class JSI_EXPORT AIRMapWMSTileProps final : public ViewProps {
    public:
        AIRMapWMSTileProps() = default;
        AIRMapWMSTileProps(const PropsParserContext &context, const AIRMapWMSTileProps &sourceProps,
                           const RawProps &rawProps);

    #pragma mark - Props
        std::string urlTemplate{};
        int minimumZ{};
        int maximumZ{};
        int maximumNativeZ{};
        int zIndex{};
        int tileSize{};
        bool doubleTileSize{};
        bool shouldReplaceMapContent{};
        bool flipY{};
        std::string tileCachePath{};
        int tileCacheMaxAge{};
        bool offlineMode{};
        int opacity{};
    };

    class JSI_EXPORT AIRMapOverlayProps final : public ViewProps {
    public:
        AIRMapOverlayProps() = default;
        AIRMapOverlayProps(const PropsParserContext &context, const AIRMapOverlayProps &sourceProps,
                           const RawProps &rawProps);

    #pragma mark - Props
        std::string image{};
        folly::dynamic bounds{};
        int bearing{};
        bool tappable{};
        float opacity{};
    };

    class JSI_EXPORT AIRMapClusterProps final : public ViewProps {
    public:
        AIRMapClusterProps() = default;
        AIRMapClusterProps(const PropsParserContext &context, const AIRMapClusterProps &sourceProps,
                           const RawProps &rawProps);

    #pragma mark - Props
        int distance{};
        folly::dynamic clusterItems{};
    };

} // namespace react
} // namespace facebook
