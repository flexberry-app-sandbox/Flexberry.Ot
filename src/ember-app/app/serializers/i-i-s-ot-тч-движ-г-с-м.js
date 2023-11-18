import { Serializer as ТчДвижГСМSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ot-тч-движ-г-с-м';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТчДвижГСМSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
