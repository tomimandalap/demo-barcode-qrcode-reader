<script setup lang="ts">
import { ref } from "vue";

import {
  StreamQrcodeBarcodeReader,
  IconCamera,
  type Result,
} from "vue3-barcode-qrcode-reader";

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
    <pre class="mb-8">Result: {{ resultScan }}</pre>

    <div class="phone">
      <div class="container-notch">
        <div class="notch"></div>
      </div>

      <div class="content">
        <h3 v-if="!isLoading" class="font-medium mb-4">
          Barcode and QR code scanner
        </h3>
        <stream-qrcode-barcode-reader
          capture="shoot"
          @onloading="onLoading"
          @result="onResult"
          class="rounded-2xl"
        >
          <template #actions="{ onCanPlay, isReset, onReset }">
            <button
              class="bg-green-300 px-6 py-1 rounded-md"
              @click="onCanPlay"
            >
              Stream
            </button>
            <button
              v-if="isReset"
              class="bg-blue-300 px-6 py-1 rounded-md ms-2"
              @click="onReset()"
            >
              Reset
            </button>
          </template>

          <template #action-stop="{ onCanStop }">
            <div class="container-btn-stop">
              <button
                class="bg-pink-300 px-6 py-1 rounded-md"
                @click="onCanStop()"
              >
                Stop
              </button>
            </div>
          </template>

          <template #action-facemode="{ onChangeFacemode }">
            <div class="container-btn-facemode">
              <button
                class="bg-red-300 w-10 h-10 p-2 inline-flex justify-center items-center rounded-full"
                @click="onChangeFacemode"
              >
                <icon-camera />
              </button>
            </div>
          </template>
        </stream-qrcode-barcode-reader>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.phone {
  @apply relative h-full w-[375px] border-4 border-[#111] bg-gray-300/20 rounded-3xl;

  & .container-notch {
    @apply absolute top-0 left-0 right-0 rounded-t-2xl;

    & .notch {
      @apply left-[50%] md:w-[10vw] w-[40vw] h-[4.25vh] my-0 mx-auto bg-[#111] rounded-b-xl;
    }
  }

  & .content {
    @apply flex flex-col justify-center items-center min-h-screen rounded-3xl;

    & .container-btn-stop {
      @apply absolute top-[calc(100%-10%)] left-[50%] m-auto;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    & .container-btn-facemode {
      @apply absolute top-[calc(100%-12%)] left-[calc(100%-85%)] m-auto;
    }
  }
}
</style>
