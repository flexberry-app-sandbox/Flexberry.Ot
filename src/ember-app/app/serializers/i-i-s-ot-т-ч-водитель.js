import { Serializer as ТЧВодительSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ot-т-ч-водитель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧВодительSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
