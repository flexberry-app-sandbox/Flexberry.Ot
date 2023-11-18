import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOtДоговорLForm from './forms/i-i-s-ot-договор-l';
import IISOtДолжностиLForm from './forms/i-i-s-ot-должности-l';
import IISOtЖурналУчетаLForm from './forms/i-i-s-ot-журнал-учета-l';
import IISOtКонтрагентLForm from './forms/i-i-s-ot-контрагент-l';
import IISOtОрганизацияLForm from './forms/i-i-s-ot-организация-l';
import IISOtПерсоналLForm from './forms/i-i-s-ot-персонал-l';
import IISOtПутевойЛистLForm from './forms/i-i-s-ot-путевой-лист-l';
import IISOtРукОтдЛогLForm from './forms/i-i-s-ot-рук-отд-лог-l';
import IISOtТЧВодительLForm from './forms/i-i-s-ot-т-ч-водитель-l';
import IISOtТЧЗаданВодLForm from './forms/i-i-s-ot-т-ч-задан-вод-l';
import IISOtТранспСрLForm from './forms/i-i-s-ot-трансп-ср-l';
import IISOtТчДвижГСМLForm from './forms/i-i-s-ot-тч-движ-г-с-м-l';
import IISOtТчРабВодАвтоLForm from './forms/i-i-s-ot-тч-раб-вод-авто-l';
import IISOtДоговорEForm from './forms/i-i-s-ot-договор-e';
import IISOtДолжностиEForm from './forms/i-i-s-ot-должности-e';
import IISOtЖурналУчетаEForm from './forms/i-i-s-ot-журнал-учета-e';
import IISOtКонтрагентEForm from './forms/i-i-s-ot-контрагент-e';
import IISOtОрганизацияEForm from './forms/i-i-s-ot-организация-e';
import IISOtПерсоналEForm from './forms/i-i-s-ot-персонал-e';
import IISOtПутевойЛистEForm from './forms/i-i-s-ot-путевой-лист-e';
import IISOtРукОтдЛогEForm from './forms/i-i-s-ot-рук-отд-лог-e';
import IISOtТЧВодительEForm from './forms/i-i-s-ot-т-ч-водитель-e';
import IISOtТЧЗаданВодEForm from './forms/i-i-s-ot-т-ч-задан-вод-e';
import IISOtТранспСрEForm from './forms/i-i-s-ot-трансп-ср-e';
import IISOtТчДвижГСМEForm from './forms/i-i-s-ot-тч-движ-г-с-м-e';
import IISOtТчРабВодАвтоEForm from './forms/i-i-s-ot-тч-раб-вод-авто-e';
import IISOtДоговорModel from './models/i-i-s-ot-договор';
import IISOtДолжностиModel from './models/i-i-s-ot-должности';
import IISOtЖурналУчетаModel from './models/i-i-s-ot-журнал-учета';
import IISOtКонтрагентModel from './models/i-i-s-ot-контрагент';
import IISOtОрганизацияModel from './models/i-i-s-ot-организация';
import IISOtПерсоналModel from './models/i-i-s-ot-персонал';
import IISOtПутевойЛистModel from './models/i-i-s-ot-путевой-лист';
import IISOtРукОтдЛогModel from './models/i-i-s-ot-рук-отд-лог';
import IISOtТЧВодительModel from './models/i-i-s-ot-т-ч-водитель';
import IISOtТЧЗаданВодModel from './models/i-i-s-ot-т-ч-задан-вод';
import IISOtТранспСрModel from './models/i-i-s-ot-трансп-ср';
import IISOtТчДвижГСМModel from './models/i-i-s-ot-тч-движ-г-с-м';
import IISOtТчРабВодАвтоModel from './models/i-i-s-ot-тч-раб-вод-авто';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ot-договор': IISOtДоговорModel,
    'i-i-s-ot-должности': IISOtДолжностиModel,
    'i-i-s-ot-журнал-учета': IISOtЖурналУчетаModel,
    'i-i-s-ot-контрагент': IISOtКонтрагентModel,
    'i-i-s-ot-организация': IISOtОрганизацияModel,
    'i-i-s-ot-персонал': IISOtПерсоналModel,
    'i-i-s-ot-путевой-лист': IISOtПутевойЛистModel,
    'i-i-s-ot-рук-отд-лог': IISOtРукОтдЛогModel,
    'i-i-s-ot-т-ч-водитель': IISOtТЧВодительModel,
    'i-i-s-ot-т-ч-задан-вод': IISOtТЧЗаданВодModel,
    'i-i-s-ot-трансп-ср': IISOtТранспСрModel,
    'i-i-s-ot-тч-движ-г-с-м': IISOtТчДвижГСМModel,
    'i-i-s-ot-тч-раб-вод-авто': IISOtТчРабВодАвтоModel
  },

  'application-name': 'Ot',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Ot',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ot',
          title: 'Ot'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        ot: {
          caption: 'Ot',
          title: 'Ot',
          'i-i-s-ot-тч-раб-вод-авто-l': {
            caption: 'Тч раб вод авто',
            title: ''
          },
          'i-i-s-ot-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-ot-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-ot-тч-движ-г-с-м-l': {
            caption: 'Тч движ ГСМ',
            title: ''
          },
          'i-i-s-ot-журнал-учета-l': {
            caption: 'Журнал учета',
            title: ''
          },
          'i-i-s-ot-трансп-ср-l': {
            caption: 'Трансп ср',
            title: ''
          },
          'i-i-s-ot-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-ot-т-ч-водитель-l': {
            caption: 'Т ч водитель',
            title: ''
          },
          'i-i-s-ot-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          },
          'i-i-s-ot-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-ot-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-ot-т-ч-задан-вод-l': {
            caption: 'Т ч задан вод',
            title: ''
          },
          'i-i-s-ot-путевой-лист-l': {
            caption: 'Путевой лист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-ot-договор-l': IISOtДоговорLForm,
    'i-i-s-ot-должности-l': IISOtДолжностиLForm,
    'i-i-s-ot-журнал-учета-l': IISOtЖурналУчетаLForm,
    'i-i-s-ot-контрагент-l': IISOtКонтрагентLForm,
    'i-i-s-ot-организация-l': IISOtОрганизацияLForm,
    'i-i-s-ot-персонал-l': IISOtПерсоналLForm,
    'i-i-s-ot-путевой-лист-l': IISOtПутевойЛистLForm,
    'i-i-s-ot-рук-отд-лог-l': IISOtРукОтдЛогLForm,
    'i-i-s-ot-т-ч-водитель-l': IISOtТЧВодительLForm,
    'i-i-s-ot-т-ч-задан-вод-l': IISOtТЧЗаданВодLForm,
    'i-i-s-ot-трансп-ср-l': IISOtТранспСрLForm,
    'i-i-s-ot-тч-движ-г-с-м-l': IISOtТчДвижГСМLForm,
    'i-i-s-ot-тч-раб-вод-авто-l': IISOtТчРабВодАвтоLForm,
    'i-i-s-ot-договор-e': IISOtДоговорEForm,
    'i-i-s-ot-должности-e': IISOtДолжностиEForm,
    'i-i-s-ot-журнал-учета-e': IISOtЖурналУчетаEForm,
    'i-i-s-ot-контрагент-e': IISOtКонтрагентEForm,
    'i-i-s-ot-организация-e': IISOtОрганизацияEForm,
    'i-i-s-ot-персонал-e': IISOtПерсоналEForm,
    'i-i-s-ot-путевой-лист-e': IISOtПутевойЛистEForm,
    'i-i-s-ot-рук-отд-лог-e': IISOtРукОтдЛогEForm,
    'i-i-s-ot-т-ч-водитель-e': IISOtТЧВодительEForm,
    'i-i-s-ot-т-ч-задан-вод-e': IISOtТЧЗаданВодEForm,
    'i-i-s-ot-трансп-ср-e': IISOtТранспСрEForm,
    'i-i-s-ot-тч-движ-г-с-м-e': IISOtТчДвижГСМEForm,
    'i-i-s-ot-тч-раб-вод-авто-e': IISOtТчРабВодАвтоEForm
  },

});

export default translations;
