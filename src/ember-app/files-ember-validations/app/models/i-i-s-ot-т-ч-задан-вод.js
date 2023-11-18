import {
  defineNamespace,
  defineProjections,
  Model as ТЧЗаданВодMixin
} from '../mixins/regenerated/models/i-i-s-ot-т-ч-задан-вод';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧЗаданВодMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
