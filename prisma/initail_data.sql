INSERT INTO
    `QuizType` (`id`, `name`, `description`)
VALUES
    (1, 'Conversation', '会話型'),
    (2, 'Translation', '翻訳型'),
    (3, 'quiz', 'クイズ');

INSERT INTO
    `Quizzes` (
        `id`,
        `content`,
        `level`,
        `option`,
        `create_date`,
        `update_date`,
        `quiz_type_id`
    )
VALUES
    (
        '07752d00-56c9-11ee-ba65-3ab5df3c8e16',
        '私の友達は昨日映画を見ました。',
        NULL,
        '{}',
        '2023-09-19 17:46:30.859',
        '2023-09-19 17:46:30.859',
        2
    ),
    (
        '15fbd270-56c9-11ee-ba65-3ab5df3c8e16',
        'これは私の新しい車です。',
        NULL,
        '{}',
        '2023-09-19 17:46:55.230',
        '2023-09-19 17:46:55.230',
        2
    ),
    (
        'cd855e12-56c8-11ee-ba65-3ab5df3c8e16',
        '今日は天気が良いです。',
        NULL,
        '{}',
        '2023-09-19 17:44:53.657',
        '2023-09-19 17:44:53.657',
        2
    ),
    (
        'e682a4d4-56c7-11ee-ba65-3ab5df3c8e16',
        '私はこれから日本にいきます。',
        NULL,
        '{}',
        '2023-09-19 17:38:15.553',
        '2023-09-19 17:38:15.553',
        2
    );
