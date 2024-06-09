"use strict";
/**
 * Copyright 2022 The MediaPipe Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoseLandmarker = exports.ObjectDetector = exports.InteractiveSegmenter = exports.ImageSegmenter = exports.ImageEmbedder = exports.ImageClassifier = exports.HolisticLandmarker = exports.HandLandmarker = exports.GestureRecognizer = exports.FaceStylizer = exports.FaceLandmarker = exports.FaceDetector = exports.MPMask = exports.MPImage = exports.FilesetResolver = exports.DrawingUtils = void 0;
var fileset_resolver_1 = require("../../../tasks/web/core/fileset_resolver");
var drawing_utils_1 = require("../../../tasks/web/vision/core/drawing_utils");
var image_1 = require("../../../tasks/web/vision/core/image");
var mask_1 = require("../../../tasks/web/vision/core/mask");
var face_detector_1 = require("../../../tasks/web/vision/face_detector/face_detector");
var face_landmarker_1 = require("../../../tasks/web/vision/face_landmarker/face_landmarker");
var face_stylizer_1 = require("../../../tasks/web/vision/face_stylizer/face_stylizer");
var gesture_recognizer_1 = require("../../../tasks/web/vision/gesture_recognizer/gesture_recognizer");
var hand_landmarker_1 = require("../../../tasks/web/vision/hand_landmarker/hand_landmarker");
var holistic_landmarker_1 = require("../../../tasks/web/vision/holistic_landmarker/holistic_landmarker");
var image_classifier_1 = require("../../../tasks/web/vision/image_classifier/image_classifier");
var image_embedder_1 = require("../../../tasks/web/vision/image_embedder/image_embedder");
var image_segmenter_1 = require("../../../tasks/web/vision/image_segmenter/image_segmenter");
var interactive_segmenter_1 = require("../../../tasks/web/vision/interactive_segmenter/interactive_segmenter");
var object_detector_1 = require("../../../tasks/web/vision/object_detector/object_detector");
var pose_landmarker_1 = require("../../../tasks/web/vision/pose_landmarker/pose_landmarker");
// Declare the variables locally so that Rollup in OSS includes them explicitly
// as exports.
var DrawingUtils = drawing_utils_1.DrawingUtils;
exports.DrawingUtils = DrawingUtils;
var FilesetResolver = fileset_resolver_1.FilesetResolver;
exports.FilesetResolver = FilesetResolver;
var MPImage = image_1.MPImage;
exports.MPImage = MPImage;
var MPMask = mask_1.MPMask;
exports.MPMask = MPMask;
var FaceDetector = face_detector_1.FaceDetector;
exports.FaceDetector = FaceDetector;
var FaceLandmarker = face_landmarker_1.FaceLandmarker;
exports.FaceLandmarker = FaceLandmarker;
var FaceStylizer = face_stylizer_1.FaceStylizer;
exports.FaceStylizer = FaceStylizer;
var GestureRecognizer = gesture_recognizer_1.GestureRecognizer;
exports.GestureRecognizer = GestureRecognizer;
var HandLandmarker = hand_landmarker_1.HandLandmarker;
exports.HandLandmarker = HandLandmarker;
var HolisticLandmarker = holistic_landmarker_1.HolisticLandmarker;
exports.HolisticLandmarker = HolisticLandmarker;
var ImageClassifier = image_classifier_1.ImageClassifier;
exports.ImageClassifier = ImageClassifier;
var ImageEmbedder = image_embedder_1.ImageEmbedder;
exports.ImageEmbedder = ImageEmbedder;
var ImageSegmenter = image_segmenter_1.ImageSegmenter;
exports.ImageSegmenter = ImageSegmenter;
var InteractiveSegmenter = interactive_segmenter_1.InteractiveSegmenter;
exports.InteractiveSegmenter = InteractiveSegmenter;
var ObjectDetector = object_detector_1.ObjectDetector;
exports.ObjectDetector = ObjectDetector;
var PoseLandmarker = pose_landmarker_1.PoseLandmarker;
exports.PoseLandmarker = PoseLandmarker;
