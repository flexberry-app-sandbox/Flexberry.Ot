import { Serializer as ДоговорSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ot-договор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДоговорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
