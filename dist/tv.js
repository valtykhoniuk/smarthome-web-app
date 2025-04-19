"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const selectedChannel = document.getElementById("channel-select");
const buttonSelectChannel = document.getElementById("choose-channel");
const statusChannelText = document.getElementById("status-tv-text");
function loadTVState() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const res = yield fetch("http://localhost:3000/api/state");
        const data = yield res.json();
        const channel = ((_a = data.tv) === null || _a === void 0 ? void 0 : _a.channel) || "-";
        statusChannelText.textContent = `Current channel: ${channel}`;
        selectedChannel.value = channel;
    });
}
loadTVState();
function updateChannel(channel) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("http://localhost:3000/api/state");
        const state = yield res.json();
        state.tv.channel = channel;
        yield fetch("http://localhost:3000/api/state", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        });
        statusChannelText.textContent = `Current channel: ${channel}`;
    });
}
buttonSelectChannel.addEventListener("click", () => {
    updateChannel(selectedChannel.value);
});
