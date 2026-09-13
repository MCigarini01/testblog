// PendingState.js

import CommentState
from "./CommentState.js";

export default class PendingState
extends CommentState {

    getName() {

        return "pending";
    }
}