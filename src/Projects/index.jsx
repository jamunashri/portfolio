import React from "react";
import "./index.css"

const SampleProjects = () => {
  return (
    <div class="content content-boxed">
      <div class="row items-push py-4">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <a
            class="block block-rounded block-link-pop h-100 mb-0"
            href="https://jamuna-text-to-speech-convertor.netlify.app/"
           target="_blank"
          >
            <div class="block-content block-content-full text-center bg-danger">
              <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                <i class="si si-briefcase fa-2x text-white-75"></i>
              </div>
            </div>
            <div class="block-content block-content-full">
              <h4 class="h5 mb-1">Text to Speech Convertor</h4>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <a
            class="block block-rounded block-link-pop h-100 mb-0"
            href="https://background-detector.netlify.app/"
            target="_blank"
          >
            <div class="block-content block-content-full text-center bg-gray-dark">
              <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                <i class="si si-camcorder fa-2x text-white-75"></i>
              </div>
            </div>
            <div class="block-content block-content-full">
              <h4 class="h5 mb-1">Background color Detector</h4>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <a
            class="block block-rounded block-link-pop h-100 mb-0"
            href="https://jamunashri-quiz-app.netlify.app/"
            target="_blank"
          >
            <div class="block-content block-content-full text-center bg-primary">
              <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                <i class="si si-chemistry fa-2x text-white-75"></i>
              </div>
            </div>
            <div class="block-content block-content-full">
              <h4 class="h5 mb-1">Quiz App</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;