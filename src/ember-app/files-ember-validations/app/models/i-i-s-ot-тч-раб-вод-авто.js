import {
  defineNamespace,
  defineProjections,
  Model as ТчРабВодАвтоMixin
} from '../mixins/regenerated/models/i-i-s-ot-тч-раб-вод-авто';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчРабВодАвтоMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
