// ApprovedState.js

import CommentState
from "./CommentState.js";

export default class ApprovedState
extends CommentState {

    getName() {

        return "approved";
    }
}