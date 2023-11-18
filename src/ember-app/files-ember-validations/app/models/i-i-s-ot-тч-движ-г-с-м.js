import {
  defineNamespace,
  defineProjections,
  Model as ТчДвижГСМMixin
} from '../mixins/regenerated/models/i-i-s-ot-тч-движ-г-с-м';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчДвижГСМMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
