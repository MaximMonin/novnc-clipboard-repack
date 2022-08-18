export default class Clipboard {
    constructor(target) {
        this._target = target;

        this._eventHandlers = {
            'copy': this._handleCopy.bind(this),
            'paste': this._handlePaste.bind(this),
            'keydown': this._handleKeyDown.bind(this)
        };

        // ===== EVENT HANDLERS =====

        this.onpaste = () => {};
        this.onpasteTTY = () => {};
    }

    // ===== PRIVATE METHODS =====

    _handleCopy(e) {
        if (navigator.clipboard.writeText) {
            navigator.clipboard.writeText(e.clipboardData.getData('text/plain')).catch(() => {/* Do nothing */});
        }
    }

    _handlePaste(e) {
        if (navigator.clipboard.readText) {
            navigator.clipboard.readText().then((clipText) => {this.onpaste(clipText);}).catch(() => {/* Do nothing */});
        } else if (e.clipboardData) {
            this.onpaste(e.clipboardData.getData('text/plain'));
        }
    }

    _handleKeyDown(e) {
        if (e.ctrlKey && e.which === 86 /* ctrl-v */ || e.shiftKey && e.which === 45 /* shift-Ins */) {
            e.preventDefault();
            if (navigator.clipboard.readText) {
                navigator.clipboard.readText().then((clipText) => {this.onpasteTTY(clipText);}).catch(() => {/* Do nothing */});
            }
        }
    }

    // ===== PUBLIC METHODS =====

    grab() {
        if (!Clipboard.isSupported) return;
        this._target.addEventListener('copy', this._eventHandlers.copy);
        this._target.addEventListener('paste', this._eventHandlers.paste);
        this._target.addEventListener('keydown', this._eventHandlers.keydown);
    }

    ungrab() {
        if (!Clipboard.isSupported) return;
        this._target.removeEventListener('copy', this._eventHandlers.copy);
        this._target.removeEventListener('paste', this._eventHandlers.paste);
        this._target.removeEventListener('keydown', this._eventHandlers.keydown);
    }
}

Clipboard.isSupported = (navigator && navigator.clipboard) ? true : false;
