import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ot-тч-раб-вод-авто', 'Unit | Serializer | i-i-s-ot-тч-раб-вод-авто', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ot-тч-раб-вод-авто',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-ot-договор',
    'model:i-i-s-ot-должности',
    'model:i-i-s-ot-журнал-учета',
    'model:i-i-s-ot-контрагент',
    'model:i-i-s-ot-организация',
    'model:i-i-s-ot-персонал',
    'model:i-i-s-ot-путевой-лист',
    'model:i-i-s-ot-рук-отд-лог',
    'model:i-i-s-ot-т-ч-водитель',
    'model:i-i-s-ot-т-ч-задан-вод',
    'model:i-i-s-ot-трансп-ср',
    'model:i-i-s-ot-тч-движ-г-с-м',
    'model:i-i-s-ot-тч-раб-вод-авто',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
