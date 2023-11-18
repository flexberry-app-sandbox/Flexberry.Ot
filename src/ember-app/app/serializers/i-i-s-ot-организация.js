import { Serializer as ОрганизацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ot-организация';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОрганизацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
