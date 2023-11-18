import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ot.caption'),
          title: i18n.t('forms.application.sitemap.ot.title'),
          children: [{
            link: 'i-i-s-ot-тч-раб-вод-авто-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-тч-раб-вод-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-тч-раб-вод-авто-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-ot-организация-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-организация-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-ot-персонал-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-персонал-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-ot-тч-движ-г-с-м-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-тч-движ-г-с-м-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-тч-движ-г-с-м-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-ot-журнал-учета-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-журнал-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-журнал-учета-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-ot-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-трансп-ср-l.title'),
            children: null
          }, {
            link: 'i-i-s-ot-должности-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-должности-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-ot-т-ч-водитель-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-т-ч-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-т-ч-водитель-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-ot-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-рук-отд-лог-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-ot-договор-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-договор-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-ot-контрагент-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-контрагент-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-ot-т-ч-задан-вод-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-т-ч-задан-вод-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-т-ч-задан-вод-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-ot-путевой-лист-l',
            caption: i18n.t('forms.application.sitemap.ot.i-i-s-ot-путевой-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.ot.i-i-s-ot-путевой-лист-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})