<script setup lang="ts">
import { ref } from "vue";

import InputRadio from "../components/InputRadio.vue";
import {
  StreamQrcodeBarcodeReader,
  type Result,
} from "vue3-barcode-qrcode-reader";

const modeCapture = ref<"shoot" | "stream">("shoot");
const itemCapture: { label: string; value: "shoot" | "stream" }[] = [
  {
    label: "Shoot",
    value: "shoot",
  },
  {
    label: "Stream",
    value: "stream",
  },
];

const isLoading = ref<boolean>(false);
function onLoading(loading: boolean) {
  isLoading.value = loading;
}

const resultScan = ref<Result | undefined>(undefined);
function onResult(result: Result | undefined) {
  resultScan.value = result;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h4>Select mode:</h4>
    <InputRadio
      v-for="capture in itemCapture"
      :key="`input-radio-${capture.value}`"
      v-model="modeCapture"
      :label="capture.label"
      :target-id="`target-${capture.value}`"
      :is-value="capture.value"
    />

    <pre class="my-8">Result: {{ resultScan }}</pre>

    <div class="phone">
      <div class="container-notch">
        <div class="notch"></div>
      </div>

      <div class="content">
        <h3 v-if="!isLoading" class="font-medium mb-4">
          Barcode and QR code scanner
        </h3>
        <StreamQrcodeBarcodeReader
          :capture="modeCapture"
          @onloading="onLoading"
          @result="onResult"
          class="rounded-2xl"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.phone {
  @apply relative h-full min-h-[812px] w-[375px] border-4 border-[#111] bg-gray-300/20 rounded-3xl;

  & .container-notch {
    @apply absolute top-0 left-0 right-0 rounded-t-2xl;

    & .notch {
      @apply left-[50%] md:w-[10vw] w-[40vw] h-[4.25vh] my-0 mx-auto bg-[#111] rounded-b-xl;
    }
  }

  & .content {
    @apply flex flex-col justify-center items-center min-h-screen rounded-3xl;
  }
}
</style>
