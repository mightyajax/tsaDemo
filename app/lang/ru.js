'use strict';
module.exports = {
    "App": {
        okBtn: "Ok",
        closeBtn: "Закрыть",
        cancelBtn: "Отмена",
        saveBtn: "Сохранить",
        jan: 'Январь',
        feb: 'Февраль',
        mar: 'Март',
        apr: 'Апрель',
        may: 'Май',
        jun: 'Июнь',
        jul: 'Июль',
        aug: 'Август',
        sen: 'Сентябрь',
        oct: 'Октябрь',
        nov: 'Ноябрь',
        dec: 'Декабрь'
    },
    "SettingsModule": {
        passwordErrorNotEqual: "Пароли не совпадают.",
        passwordErrorNotTest: "Пароль должен содержать цифры, строчные и прописные буквы латинского алфавита.",
        modalSavedHeader: "Сохранение настроек",
        modalSavedMessage: "Настройки были успешно сохранены",
        langChooseHeader: "Выбор языка",
        passwordChangeHeader: "Смена пароля",
        passwordLabel: "Пароль",
        passwordConfirmLabel: "Подтверждение"
    },
    "AutocompleteComponent": {
        inputPlaceholder: "Выберите значение"
    },
    "ImageUploadComponent": {
        downloadImgBtn: "Скачать",
        uploadImgBtn: "Загрузить фото",
        chooseFileBtn: "Выберите файл"
    },
    "CalendarModule": {
        dateEditHeader: "Редактирование даты ",
        sumToLabel: "Суммируется с ",
        workDayLabel: "рабочие дни",
        weekendDayLabel: "выходные дни",
        weekendDayColumnLabel: "Выходной день",
        sumWithColumnLabel: "Суммировать дату с",
        errorModalHeader: "Ошибка редактирования данных",
        errorModalMessage1: "Редактирование разрешено только с текущего месяца!",
        errorModalMessage2: "Обратитесь к администратору.",
        sumToSameDateError: 'Необходимо выбрать значение для поля "Суммировать с" отличное от текущей даты.'
    },
    "CardModule": {
        loadingModalHeader: "Загрузка данных",
        loadingModalBody: "Пожалуйста, подождите...",
        mainCardCreateHeader: "Добавление новой записи",
        mainCardUpdateHeader: "Редактирование записи: ",
        downloadReportCustomBtn: "Скачать",
        uploadReportCustomBtn: "Загрузить",
        locatorLink: "Изменить координаты",
        selectInputHintLabel: "Выберите значение",
        selectInputNullLabel: "Нет значения",
        multiPickerDefaultFilterValue: "Код",
        emptyFieldsError: "Не заполнены обязательные поля: ",
        pickerDefaultLink: "изменить"
    },
    "ExportCsvModule": {
        modalExportHeaderDefault: "Экспорт данных",
        modalReportHeaderDefault: "Формирование отчета",
        exportCsvBtn: 'Экспорт (строк: {rowsCount})',
        ganerateReportBtn: 'Сформировать отчет',
        modalHeaderLoading: 'Формирование файла',
        reportReadyHeader: 'Отчет сформирован',
        exportReadyHeader: 'Экспорт данных завершен',
        downloadBtn: 'Скачать'
    },
    "FileProcess": {
        step2LoadedStatus: "Загружен",
        step2ErrorLoadStatus: "Ошибка загрузки",
        step2LoadingStatus: "Загружается",
        step2UploadingResults: "Результаты загрузки файлов",
        step2TotalUploaded: "Загружено файлов на сервер: ",
        step2UploadBtn: "Загрузить",
        step3ProcessInterruptedMsg: "Обработка файлов была прервана!",
        step3ModalToContinueMsg: 'Обработку файлов можно возобновить, нажав на кнопку "Начать обработку".',
        step3ModalHeader: "Результаты обработки файлов",
        step3ProcessedFiles: "Успешно обработано файлов: ",
        step3UnprocessedFiles: "Не обработано файлов: ",
        step3StartProcess: "Начать обработку",
        step3StopProcess: "Прервать обработку"
    },
    "FilterModule": {
        activeRows: "Активные записи",
        inactiveRows: "Неактивные записи",
        allRows: "Все записи",
        conditionEqual: "Равно",
        conditionNotEqual: "Не равно",
        conditionMore: "Больше",
        conditionLess: "Меньше",
        conditionLikeStart: "Начинается с",
        conditionLike: "Включает в себя",
        conditionNull: "Пустое",
        conditionNotNull: "Непустое",
        conditionMoreOrEqual: "Больше или равно",
        conditionLessOrEqual: "Меньше или равно",
        conditionBetween: "Диапазон",
        conditionList: "Список",
        textFilterPlaceholder: "Введите значение",
        dateFilterPlaceholder: "Введите дату",
        filterLoadingMsg: "Загрузка данных для фильтра",
        dateByLabel: "по",
        groupConditionAnd: "И",
        groupConditionOr: "Или",
        groupWithPrev: "Группировать с предыдущим",
        loadingModalHeader: "Загрузка данных",
        loadingModalBody: "Пожалуйста, подождите...",
        loadedChooseFilterLabel: "Выберите фильтр",
        loadedModalHeader: "Добавить фильтр",
        addFilterBtn: "Добавить фильтр",
        defaultFilterHint: "Выберите фильтр"
    },
    "GridModule": {
        activeFilterActiveRows: "Активные записи",
        activeFilterInactiveRows: "Неактивные записи",
        activeFilterallRows: "Все записи",
        activeFilterShowMsg: "показывать ",
        conditionEqual: "Равно",
        conditionNotEqual: "Не равно",
        conditionMore: "Больше",
        conditionLess: "Меньше",
        conditionLikeStart: "Начинается с",
        conditionLike: "Включает в себя",
        conditionNull: "Пустое",
        conditionNotNull: "Непустое",
        conditionMoreOrEqual: "Больше или равно",
        conditionLessOrEqual: "Меньше или равно",
        conditionBetween: "Диапазон",
        conditionList: "Список",
        dateRangeStart: "с",
        dateRangeEnd: "по",
        loadingModalHeader: "Загрузка данных",
        loadingModalBodyMsg: "Пожалуйста, подождите...",
        loadingModalBodyWarningMsg: "Операция может занять продолжительное время.",
        addFilterBtn: "Добавить фильтр",
        exportCsvBtn: "Экспорт в CSV",
        addColumnHint: "Добавить колонку",
        actionsBtn: "Действия ",
        groupEdit: "Групповое редактирование",
        addRowBtn: "Добавить запись",
        singleRowMode: "Однострочный режим",
        multiRowMode: "Многострочный режим",
        totalRowsLabel: "всего",
        GridPickerHeader: "Выбор значения для поля "
    },
    "MenuModule": {
        helpLink: "Справка",
        exitLink: "Выход",
        aboutLink: "О программе",
        settingsLink: "Настройки",
        changePasswordLink: "Сменить пароль",
        changeLanguageLink: "Сменить язык",
        copyrightHeader: "О программе"
    },
    "ReportFilterModule": {
        activeRows: "Активные записи",
        inactiveRows: "Неактивные записи",
        allRows: "Все записи",
        conditionEqual: "Равно",
        conditionNotEqual: "Не равно",
        conditionMore: "Больше",
        conditionLess: "Меньше",
        conditionLikeStart: "Начинается с",
        conditionLike: "Включает в себя",
        conditionNull: "Пустое",
        conditionNotNull: "Непустое",
        conditionMoreOrEqual: "Больше или равно",
        conditionLessOrEqual: "Меньше или равно",
        conditionBetween: "Диапазон",
        textFilterPlaceholder: "Введите значение",
        dateFilterPlaceholder: "Введите дату",
        filterLoadingMsg: "Загрузка данных для фильтра",
        dateByLabel: "по",
        groupConditionAnd: "И",
        groupConditionOr: "Или",
        groupWithPrev: "Группировать с предыдущим",
        loadingModalHeader: "Загрузка данных",
        loadingModalBody: "Пожалуйста, подождите...",
        loadedChooseFilterLabel: "Выберите фильтр",
        loadedModalHeader: "Добавить фильтр",
        addFilterBtn: "Добавить фильтр",
        modalReportHeader: "Формирование отчета",
        modalReportBodyMsg: "Пожалуйста, подождите...",
        reportWord: "Отчет",
        reportReadyMsg: "сформирован.",
        forSaveReportMsg: "Для сохранения нажмите Ок",
        loadedReportHeader: "Формирование отчета",
        getReportBtn: "Сформировать отчет"
    },
    "ShipmentProcessModule": {
        fileInputLabel: "Кликните в область для выбора файла для загрузки",
        loadingHeader: "Загрузка файла",
        loadedFileSuccessUploadedMsg: "Файл успешно загружен",
        loadedFileErrorUploadedMsg: "Произошла ошибка при загрузке файла"
    },
    "SystemMessageModule": {
        callWithAdminMsg: "Обратитесь к администратору системы.",
        sendError: "Отправить администратору"
    },
    "FileProcessPage": {
        fileUploadMenuLink: "Загрузка файлов",
        fileProcessMenuLink: "Обработка файлов",
        fileInputLabel: "Кликните в область для выбора файла для загрузки",
        fileTableFileColumn: "Файл",
        fileTableSizeColumn: "Размер",
        fileTableStatusColumn: "Статус",
        processTableFileColumn: "Файл",
        processTableRegionColumn: "Регион",
        processTableCountColumn: "Количество",
        processTableFirstDayColumn: "Первый день",
        processTableLastDayColumn: "Последний день",
        processTableProgressColumn: "Прогресс",
        processTableStatusColumn: "Статус",
        confirmModalHeader: "Внимание!",
        confirmModalBodyMsg: "В списке присутствуют некорректные файлы, которые не будут загружены. Продолжить загрузку?",
        confirmModalConfirmBtn: "Продолжить"
    },
    "LoginPage": {
        authError: "Ошибка авторизации!",
        incorrectPassword: " Неверный логин или пароль.",
        loginPlaceholder: "Логин",
        passwordPlaceholder: "Пароль",
        authBtn: "Войти в систему"},
    "Helper": {
        header: "Произошла ошибка",
        sqlError: "Некорректный SQL запрос!",
        requiredParamsError: "Обязательные параметры запроса отсутствуют или пусты!",
        sessionExpiredError: "Текущая сессия завершена!",
        moduleError: 'Ошибка в модуле "{module}", в функции "{function}"'
    },
    "RoutesUploadModule": {
        fileInputLabel: "Кликните в область для выбора файлов для загрузки"
    },
    "RouteCalendarModule": {
        Monday: "Понедельник",
        Tuesday: "Вторник",
        Wednesday: "Среда",
        Thursday: "Четверг",
        Friday: "Пятница",
        Saturday: "Суббота",
        Sunday: "Воскресение"
    },
    "ActivityOnMapModule": {
        dateInputLabel: "Выберите дату для просмотра результатов активностей за определенный день",
        showResultBtn: "Показать результаты на карте"
    },
    "SurveyManageModule": {
        surveyPickerLink: "Выбор опроса",
        questionAnswerManageLink: "Управление опросами/ответами",
        surveyConstructorLink: "Конструктор опроса"
    },
    "SM_SurveyPickerModule": {
        gridCustomColumn: "Выбрать"
    },
    "SM_QuestionAnswerManageModule": {
        showAnswersBtn: 'показать ответы',
        answerGridHint: 'Для просмотра/редактирования ответов нажмите на кнопку "Показать ответы"',
        answerGridFilterLabel: 'Ответы к вопросу "{question}"'
    },
    "SM_SurveyConstructorModule": {
        QuestionsHeader: 'Вопросы',
        QuestionsCountLabel: ' (Кол-во: {count})',
        questionSourceBtn: 'Источник вопросов',
        checkSurveyBtn: 'Проверить прохождение',
        removeQuestionBtn: 'Удалить ({count})',
        saveBtn: 'Сохранить',
        questionsTableColumnName: 'Вопросы',
        questionsTableColumnCode: 'Код',
        AnswersHeader: 'Ответы',
        AnswersCountLabel: ' (Кол-во: {count})',
        answersTableColumnOptions: 'Варианты ответов',
        answersTableColumnNextQuestion: 'Следующий вопрос',
        answersTableColumnRequiredAnswer: 'Обязательный ответ',
        questionSourceModalHeader: 'Источник вопросов',
        questionSourceModalAddBtn: 'Добавить',
        questionSourceModalCancelBtn: 'Отмена',
        checkSurveyModalHeader: 'Проверка опроса',
        cycleError: 'Возможен цикл из вопроса #{start} к #{end}',
        emptyAnswerError: 'Не указан "Следующий вопрос" в ответе #{answer} в вопросе #{question}'
    },
    "ImeiMigrationModule": {
        searchByInventoryNumberBtn: "Поиск по инвентарному номеру",
        chooseFromTreeBtn: "Выбор из дерева",
        migrateBtn: "Перенести",
        fullScreenBtn: "Полный экран",
        normalScreenBtn: "Свернуть",
        editUserBtn: "Редактировать пользователя",
        createUserBtn: "Создать пользователя",
        migrateModalHeader: "Перемещение устройств",
        migrateModalConfirmMessage: 'Перенести выбранные устройства под пользователя "{user}"',
        migrateModalConfirmBtn: 'Перенести',
        migrateModalCancelBtn: 'Отмена',
        migrateModalSuccessMessage: 'Устройства успешно перенесены!',
        migrateModalErrorHeader: 'Ошибка',
        migrateModalErrorNoDevice: 'Не выбрано ни одного устройства!',
        migrateModalErrorNoUser: 'Не выбран пользователь для переноса устройств!'
    },
    "IM_DestinationUserTreeModule": {
        searchPlaceholder: "Поиск",
        noInventoryNumberLabel: " (нет инвен-го номера)",
        deviceCountLabel: " (кол-во планшетов: {imeiCount})"
    },
    "IM_ImeiSearchModule": {
        addBtn: "Добавить",
        tableColumnCode: "Код",
        tableColumnDevice: "Устройство",
        tableColumnInventory: "Инвентарный номер",
        tableColumnSerial: "Серийный номер"
    },
    "RoutesManageModule": {
        stepChooseUser: 'Выбор торгового представителя',
        stepEditUser: 'Редактирование маршрутов ТП',
        stepSalepoints: 'Торговые точки в маршруте ТП',
        stepCalendar: 'Календарь маршрутов',
        showSalepointsInRouteBtn: 'Количество ТТ в маршрутах',
        gridStaticFilterLabel: 'Код ТП',
        salepointCountModalHeader: 'Количество ТТ в маршрутах',
        salepointCountTableColumnRoute: "Маршрут",
        salepointCountTableColumnCount: "Количество ТТ"
    },
    "RM_manageSalepointModule": {
        instructionRow1: 'Для начала работы выберите маршрут из выпадающего списка в правой части экрана.',
        instructionRow2: 'После выбора маршрута, в появившейся в левой части экрана таблице-"источнике", выделите торговые точки, которые должны быть добавлены в маршрут отмечая их выбором чекбокса.',
        instructionRow3: 'После выбора точек в таблице-"источнике" перетяните их в таблицу-"получатель" в правой части экрана.',
        instructionRow4: 'Чтобы сохранить точки в маршруте нажмите кнопку "Сохранить", расположенную над таблицей-"получателем".',
        instructionRow5: 'Чтобы удалить точки из маршрута, выделите необходимые записи в таблице-"получателе" в правой части экрана и нажмите появившуюся кнопку "Удалить точки".',
        chooseRoutePlaceholder: 'Выберите маршрут',
        salepointTableColumnCode: 'Код ТТ',
        salepointTableColumnName: 'Название',
        salepointTableColumnAddress: 'Адрес',
        salepointTableColumnDirection: 'Направление',
        removeSalepointsBtn: 'Удалить точки({count})',
        saveRouteBtnDisabled: 'Сохранить маршрут',
        saverouteBtn: 'Сохранить маршрут ({count})',
        salepointSourceGridStaticFilterLabel: 'Исключить ТТ маршрута {route}',
        routeSavingErrorHeader: 'Ошибка сохранения маршрута',
        routeSavingErrorNoSalepoint1: 'Маршрут не может быть сохранен.',
        routeSavingErrorNoSalepoint2: 'В маршруте должна быть хотя бы одна точка.',
        savingRouteModalHeader: 'Сохранение маршрута',
        savingRouteModalMessage: 'Маршрут успешно сохранен.'
    },
    "RM_routeCalendarModule": {
        noRouteLabel: "нет маршрута",
        routeInfoModalHeader: 'Торговые точки для маршрута: "{route}" (количество: {count})',
        routeInfoModalTableColumnCode: 'Код ТТ',
        routeInfoModalTableColumnName: 'Имя ТТ',
        routeInfoModalTableColumnNodes: 'Примечания',
        saveErrorNeedSaveTamplate: 'В шаблон были внесены изменения, необходимо его сохранить.',
        saveErrorNoRoutes: 'В шаблоне отсутствуют маршруты.',
        saveErrorNoDates: 'Необходимо выставить диапазон дат.',
        shapeCalendarError: "Ошибка формирования календаря",
        saveCalendarModalHeader: 'Сохранение календаря',
        saveCalendarModalSaveBtn: 'Сохранить',
        saveCalendarModalConfirmRow1: 'Внимание!',
        saveCalendarModalConfirmRow2: 'Вы собираетесь изменить календарь маршрутов для ТП "{user}".',
        saveCalendarModalConfirmRow3: 'Все существующие записи будут изменены на содержащиеся в таблице календаре.',
        saveCalendarModalConfirmRow4: 'Вы уверены, что хотите продолжить?',
        calendarModalSavedHeader: 'Сохранение календаря',
        calendarModalSavedMessage: 'Календарь успешно сохранен.',
        saveTemplateModalHeader: 'Сохранение шаблона',
        saveTemplateModalConfirmBtn: 'Продолжить',
        saveTemplateModalConfirmRow1: 'Внимание!',
        saveTemplateModalConfirmRow2: 'Вы собираетесь изменить шаблон маршрута для ТП "{user}".',
        saveTemplateModalConfirmRow3: 'Все существующие записи будут изменены на содержащиеся в таблице получателе.',
        saveTemplateModalConfirmRow4: 'Вы уверены, что хотите продолжить?',
        templateModalSavedHeader: 'Сохранение шаблона',
        templateModalSavedMessage: 'Шаблон успешно сохранен.',
        templateLabel: 'Шаблон(дней: {count})',
        addRouteBtn: 'Добавить маршрут',
        saveTemplateBtn: 'Сохранить шаблон',
        templateTableColumnDay: 'День',
        templateTableColumnRoute: 'Маршрут',
        dataRangeLabel: 'Диапазон дат',
        startDate: 'начальная дата',
        endDate: 'конечная дата',
        shapeCalendarBtn: 'Сформировать календарь',
        saveCalendarBtn: 'Сохранить календарь',
        calendarTableColumnDate: 'Дата',
        calendarTableColumnDay: 'День недели',
        calendarTableColumnRoute: 'Маршрут',
        salepointListInRouteBtn: 'Список ТТ в маршруте'
    },
    "ReportPage": {
        openReportBtn: 'Открыть'
    },
    "UserTreeModule": {
        searchPlaceholder: 'Поиск',
        saveChangesBtn: 'Сохранить изменения',
        cardHeader: 'Данные пользователя: "{user}"',
        infoModalHeader: 'Сохранение пользователей',
        infoModalSuccessMessage: 'Изменения успешно сохранены.',
        infoModalErrorMessage: 'Возникли ошибки при сохранении.',
        infoModalErrorDetail: 'Пользователь "{user}" не был сохранен.',
        userModalHeader: 'Сохранение данных пользователя',
        userModalSuccessMessage: 'Данные успешно сохранены.'
    }
}