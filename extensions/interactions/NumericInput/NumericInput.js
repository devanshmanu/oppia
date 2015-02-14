// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Directive for the NumericInput interaction.
 *
 * IMPORTANT NOTE: The naming convention for customization args that are passed
 * into the directive is: the name of the parameter, followed by 'With',
 * followed by the name of the arg.
 */
oppia.directive('oppiaInteractiveNumericInput', [
  'oppiaHtmlEscaper', function(oppiaHtmlEscaper) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'interaction/NumericInput',
      controller: ['$scope', 'focusService', function($scope, focusService) {
        $scope.answer = '';

        $scope.NUMERIC_INPUT_FORM_SCHEMA = {
          type: 'float',
          ui_config: {}
        };

        $scope.numericInputFocusLabel = Math.random().toString(36).slice(2);
        focusService.setFocus($scope.numericInputFocusLabel);

        $scope.submitAnswer = function(answer) {
          if (answer) {
            $scope.$parent.$parent.submitAnswer(Number(answer), 'submit');
          }
        };
      }]
    };
  }
]);

oppia.directive('oppiaResponseNumericInput', [
  'oppiaHtmlEscaper', function(oppiaHtmlEscaper) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'response/NumericInput',
      controller: ['$scope', '$attrs', function($scope, $attrs) {
        $scope.answer = oppiaHtmlEscaper.escapedJsonToObj($attrs.answer);
        // If the answer is an integer, omit the fractional part.
        if ($scope.answer % 1 === 0) {
          $scope.answer = Math.round($scope.answer);
        }
      }]
    };
  }
]);