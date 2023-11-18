import {
  defineNamespace,
  defineProjections,
  Model as ПутевойЛистMixin
} from '../mixins/regenerated/models/i-i-s-ot-путевой-лист';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПутевойЛистMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
