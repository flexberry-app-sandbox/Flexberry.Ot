import {
  defineNamespace,
  defineProjections,
  Model as ТЧВодительMixin
} from '../mixins/regenerated/models/i-i-s-ot-т-ч-водитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧВодительMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
