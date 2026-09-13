// MockCommentsData.js

import CommentModel from "../../models/CommentModel.js";
import PendingState from "../../models/states/PendingState.js";
import ApprovedState from "../../models/states/ApprovedState.js";
import RejectedState from "../../models/states/RejectedState.js";

const comment1 = new CommentModel(
    1,
    "Ottimo articolo, molto chiaro.",
    1,
    1,
    "2026-09-01"
);
comment1.setState(new ApprovedState());

const comment2 = new CommentModel(
    2,
    "Molto interessante.",
    2,
    1,
    "2026-09-02"
);
comment2.setState(new PendingState());

const comment3 = new CommentModel(
    3,
    "Mi è stato molto utile.",
    3,
    1,
    "2026-09-03"
);
comment3.setState(new ApprovedState());

const comment4 = new CommentModel(
    4,
    "Potresti approfondire con altri esempi?",
    1,
    2,
    "2026-09-04"
);
comment4.setState(new PendingState());

const comment5 = new CommentModel(
    5,
    "Articolo ben scritto.",
    2,
    2,
    "2026-09-05"
);
comment5.setState(new ApprovedState());

const comment6 = new CommentModel(
    6,
    "Non condivido alcune conclusioni.",
    3,
    2,
    "2026-09-06"
);
comment6.setState(new RejectedState());

const comment7 = new CommentModel(
    7,
    "Spiegazione eccellente.",
    1,
    3,
    "2026-09-07"
);
comment7.setState(new ApprovedState());

const comment8 = new CommentModel(
    8,
    "Grazie per la condivisione.",
    2,
    3,
    "2026-09-08"
);
comment8.setState(new ApprovedState());

const comment9 = new CommentModel(
    9,
    "Ho una domanda sul secondo paragrafo.",
    3,
    3,
    "2026-09-09"
);
comment9.setState(new PendingState());

const comment10 = new CommentModel(
    10,
    "Contenuto molto completo.",
    1,
    4,
    "2026-09-10"
);
comment10.setState(new ApprovedState());

export default [
    comment1,
    comment2,
    comment3,
    comment4,
    comment5,
    comment6,
    comment7,
    comment8,
    comment9,
    comment10
];