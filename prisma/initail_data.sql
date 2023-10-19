
INSERT INTO `QuizType` (`id`, `name`, `description`)VALUES (1, 'Conversation', '会話型'), (2, 'Translation', '翻訳型'), (3, 'quiz', 'クイズ');
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES ('07752d00-56c9-11ee-ba65-3ab5df3c8e16','私の友達は昨日映画を見ました。',NULL,'{}','2023-09-19 17:46:30.859','2023-09-19 17:46:30.859',2 ), ('15fbd270-56c9-11ee-ba65-3ab5df3c8e16','これは私の新しい車です。',NULL,'{}','2023-09-19 17:46:55.230','2023-09-19 17:46:55.230',2 ), ('cd855e12-56c8-11ee-ba65-3ab5df3c8e16','今日は天気が良いです。',NULL,'{}','2023-09-19 17:44:53.657','2023-09-19 17:44:53.657',2 ), ('e682a4d4-56c7-11ee-ba65-3ab5df3c8e16','私はこれから日本にいきます。',NULL,'{}','2023-09-19 17:38:15.553','2023-09-19 17:38:15.553',2 );
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(), 'おはようございます', 1, '{}', now(), now(), 2), (UUID(), 'お疲れさまです', 1, '{}', now(), now(), 2), (UUID(), 'ごめんなさい', 1, '{}', now(), now(), 2), (UUID(), 'ありがとう', 1, '{}', now(), now(), 2), (UUID(), 'どういたしまして', 1, '{}', now(), now(), 2), (UUID(), 'また明日ね', 1, '{}', now(), now(), 2), (UUID(), '楽しかった', 1, '{}', now(), now(), 2), (UUID(), 'お願いします', 1, '{}', now(), now(), 2), (UUID(), 'わかりました', 1, '{}', now(), now(), 2), (UUID(), 'おめでとう', 1, '{}', now(), now(), 2), (UUID(), 'すみません', 1, '{}', now(), now(), 2), (UUID(), 'いい天気ですね', 1, '{}', now(), now(), 2), (UUID(), 'お邪魔します', 1, '{}', now(), now(), 2), (UUID(), 'がんばってください', 1, '{}', now(), now(), 2), (UUID(), 'おやすみなさい', 1, '{}', now(), now(), 2), (UUID(), 'ごめんなさい', 1, '{}', now(), now(), 2), (UUID(), 'ありがとうございます', 1, '{}', now(), now(), 2), (UUID(),'これからよろしくお願いします',1,'{}',now(),now(),2 ), (UUID(), 'おめでとうございます', 1, '{}', now(), now(), 2), (UUID(), 'おつかれさまでした', 1, '{}', now(), now(), 2), (UUID(),'気をつけて行ってらっしゃい',1,'{}',now(),now(),2 )
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(), 'おはよう！元気ですか？', 2, '{}', now(), now(), 2), (UUID(), 'いい天気ですね。', 2, '{}', now(), now(), 2), (UUID(),'ごめんなさい、遅れました。',2,'{}',now(),now(),2 ), (UUID(), 'ありがとう、助かります。', 2, '{}', now(), now(), 2), (UUID(), '頑張ってください！', 2, '{}', now(), now(), 2), (UUID(), 'すみません、何時ですか？', 2, '{}', now(), now(), 2), (UUID(), 'もう行かないと。', 2, '{}', now(), now(), 2), (UUID(), 'いいお店を知りませんか？', 2, '{}', now(), now(), 2), (UUID(),'楽しい時間を過ごしました。',2,'{}',now(),now(),2 ), (UUID(), '仕事は順調ですか？', 2, '{}', now(), now(), 2), (UUID(),'おやすみなさい、良い夢を。',2,'{}',now(),now(),2 ), (UUID(), '疲れた…', 2, '{}', now(), now(), 2), (UUID(), 'ありがとう、助かるよ。', 2, '{}', now(), now(), 2), (UUID(), 'おめでとうございます！', 2, '{}', now(), now(), 2), (UUID(), '明日の天気はどうだろう？', 2, '{}', now(), now(), 2), (UUID(),'こんばんは、お帰りですか？',2,'{}',now(),now(),2 ), (UUID(), 'お腹がすいたな...', 2, '{}', now(), now(), 2), (UUID(),'良い週末を過ごしてください。',2,'{}',now(),now(),2 ), (UUID(), 'どういたしまして。', 2, '{}', now(), now(), 2), (UUID(), 'その通りですね！', 2, '{}', now(), now(), 2)
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(),'おはようございます、元気ですか？',3,'{}',now(),now(),2 ), (UUID(),'おめでとうございます！成功です！',3,'{}',now(),now(),2 ), (UUID(),'もうすぐお昼ごはんですね、何が食べたいですか？',3,'{}',now(),now(),2 ), (UUID(),'ごめんなさい、ちょっと待っていてください。',3,'{}',now(),now(),2 ), (UUID(),'今度の土曜日に一緒に映画を見に行きませんか？',3,'{}',now(),now(),2 ), (UUID(), '大丈夫ですか？心配です。', 3, '{}', now(), now(), 2), (UUID(),'楽しい時間を過ごしていますか？',3,'{}',now(),now(),2 ), (UUID(),'明日の天気はどうなりそうですか？',3,'{}',now(),now(),2 ), (UUID(),'すみませんが、もう一度言ってもらえますか？',3,'{}',now(),now(),2 ), (UUID(),'なかなかうまくいかないこともありますが、諦めずに頑張りましょう！',3,'{}',now(),now(),2 ), (UUID(),'おやすみなさい、良い夢を見てくださいね。',3,'{}',now(),now(),2 ), (UUID(), 'ありがとう！助かります。', 3, '{}', now(), now(), 2), (UUID(),'ごめんなさい、私の間違いです。',3,'{}',now(),now(),2 ), (UUID(),'一生懸命頑張れば必ずできますよ！',3,'{}',now(),now(),2 ), (UUID(),'一緒に遊びに行きたいですね。',3,'{}',now(),now(),2 ), (UUID(),'すごく美味しそうですね！食べたいです！',3,'{}',now(),now(),2 ), (UUID(), '遅くなってごめんなさい。', 3, '{}', now(), now(), 2), (UUID(),'気をつけて行ってらっしゃい。',3,'{}',now(),now(),2 ), (UUID(),'今日は本当に疲れました。おやすみなさい。',3,'{}',now(),now(),2 ), (UUID(),'お誕生日おめでとうございます！何歳になりましたか？',3,'{}',now(),now(),2 )
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(),'夏休みに行きたい場所は、沖縄です。',3,'{}',now(),now(),2 ), (UUID(),'最新のトレンドは、オンラインショッピングです。',3,'{}',now(),now(),2 ), (UUID(),'政府は、新たな経済対策を検討中です。',3,'{}',now(),now(),2 ), (UUID(),'新しいイベントは、来月開催されます。',3,'{}',now(),now(),2 ), (UUID(),'新型コロナウイルスの感染者数が急増しています。',3,'{}',now(),now(),2 ), (UUID(),'美容業界では、ハイビスカスエキスが注目されています。',3,'{}',now(),now(),2 ), (UUID(),'環境保護のため、エコバッグの使用を促しています。',3,'{}',now(),now(),2 ), (UUID(),'健康に良い食材は、野菜が一番です。',3,'{}',now(),now(),2 ), (UUID(),'新しいテクノロジーが、社会を変えています。',3,'{}',now(),now(),2 ), (UUID(),'有名な映画監督が、新作映画の撮影を始めました。',3,'{}',now(),now(),2 ), (UUID(),'スポーツイベントが、無観客で行われました。',3,'{}',now(),now(),2 ), (UUID(),'経済の回復に向け、政府は支援策を実施します。',3,'{}',now(),now(),2 ), (UUID(),'人気の観光地で、新しいホテルがオープンしました。',3,'{}',now(),now(),2 ), (UUID(),'音楽業界では、新たなトレンドが生まれています。',3,'{}',now(),now(),2 ), (UUID(),'最新のゲームソフトが、発売されました。',3,'{}',now(),now(),2 ), (UUID(),'有名なスポーツ選手が、引退を発表しました。',3,'{}',now(),now(),2 ), (UUID(),'新しいプロジェクトが、始動しました。',3,'{}',now(),now(),2 ), (UUID(),'世界的なイベントが、来年開催されます。',3,'{}',now(),now(),2 ), (UUID(),'健康に良い飲み物は、緑茶です。',3,'{}',now(),now(),2 )
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(),'未来の交通手段として、自動運転車が注目されています。',5,'{}',now(),now(),2 ), (UUID(),'人間の寿命は限られているため、時間の大切さを実感しましょう。',5,'{}',now(),now(),2 ), (UUID(),'地球温暖化の問題は深刻化しており、積極的な対策が必要です。',5,'{}',now(),now(),2 ), (UUID(),'今後の医療技術の進歩により、難病の治療方法が進化することが期待されます。',5,'{}',now(),now(),2 ), (UUID(),'人工知能の発展により、様々な業界で効率化が進むことが予想されます。',5,'{}',now(),now(),2 ), (UUID(),'新型コロナウイルスの感染拡大を防ぐために、マスクの着用が必要です。',5,'{}',now(),now(),2 ), (UUID(),'適度な運動は健康に良い影響を与え、心身のバランスを保つことができます。',5,'{}',now(),now(),2 ), (UUID(),'教育の充実により、子供たちの未来への可能性が広がることが期待されます。',5,'{}',now(),now(),2 ), (UUID(),'科学技術の進歩により、人類の生活は大きく変化することが予測されます。',5,'{}',now(),now(),2 ), (UUID(),'人口増加に伴い、食料供給の安定化が重要な課題となっています。',5,'{}',now(),now(),2 ), (UUID(),'災害時における迅速な対応が求められ、防災意識の向上が必要です。',5,'{}',now(),now(),2 ), (UUID(),'技術の発展により、スマートホームが一般的になりつつあります。',5,'{}',now(),now(),2 ), (UUID(),'デジタル社会の到来により、情報の取捨選択が重要なスキルとなっています。',5,'{}',now(),now(),2 ), (UUID(),'地球規模での持続可能なエネルギーの利用が求められています。',5,'{}',now(),now(),2 ), (UUID(),'人々の意識が向上し、資源の有効活用が進んでいます。',5,'{}',now(),now(),2 ), (UUID(),'新たなビジネスモデルが生まれ、経済の構造が変化しています。',5,'{}',now(),now(),2 ), (UUID(),'社会の多様化に伴い、多言語のコミュニケーション能力が求められます。',5,'{}',now(),now(),2 ), (UUID(),'テレワークの普及により、働き方の多様性が広がっています。',5,'{}',now(),now(),2 ), (UUID(),'自然環境の保全は人類共通の課題であり、国際的な取り組みが進んでいます。',5,'{}',now(),now(),2 )
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(),'新商品の開発により、市場競争力を向上させることが重要です。',4,'{}',now(),now(),2 ), (UUID(),'効果的なプレゼンテーションは、ビジネス成功の鍵となります。',4,'{}',now(),now(),2 ), (UUID(),'顧客のニーズを把握し、顧客満足度を向上させることが重要です。',4,'{}',now(),now(),2 ), (UUID(),'生産効率を向上させるためには、効果的なリーダーシップが必要です。',4,'{}',now(),now(),2 ), (UUID(),'ビジネス戦略の見直しにより、競合他社に差をつけることができます。',4,'{}',now(),now(),2 ), (UUID(),'効率的なチームビルディングにより、成果を最大化することができます。',4,'{}',now(),now(),2 ), (UUID(),'正確な情報共有により、意思決定のスピードを加速させることができます。',4,'{}',now(),now(),2 ), (UUID(),'顧客とのコミュニケーションを強化し、長期的な関係を構築しましょう。',4,'{}',now(),now(),2 ), (UUID(),'競争力のある価格設定により、市場での地位を確立することができます。',4,'{}',now(),now(),2 ), (UUID(),'ビジネスの成長には、リスクを適切に管理することが不可欠です。',4,'{}',now(),now(),2 ), (UUID(),'創造性を活かしたアイデア提案により、新たなビジネスチャンスを見つけましょう。',4,'{}',now(),now(),2 ), (UUID(),'市場調査を通じて、トレンドを把握し市場に適した商品を開発しましょう。',4,'{}',now(),now(),2 ), (UUID(),'業界の動向を把握し、時流にマッチした戦略を立てましょう。',4,'{}',now(),now(),2 ), (UUID(),'ビジネスパートナーとの良好な関係は、ビジネス成功の基盤となります。',4,'{}',now(),now(),2 ), (UUID(),'効果的な広告戦略により、ブランドの認知度を向上させましょう。',4,'{}',now(),now(),2 ), (UUID(),'競争環境の変化に対応し、柔軟な戦略を展開することが求められます。',4,'{}',now(),now(),2 ), (UUID(),'効率的なマーケティング活動により、販売促進を図ることができます。',4,'{}',now(),now(),2 ), (UUID(),'良いコミュニケーションスキルは、ビジネス上で重要な要素です。',4,'{}',now(),now(),2 ), (UUID(),'効果的なプロジェクト管理により、成果物の品質と納期を管理しましょう。',4,'{}',now(),now(),2 )

INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id` )VALUES (UUID(),'元気ですか？',1,'{}',now(),now(),1 )

INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id`) VALUES (UUID(),'こんにちは', 1, '{}',now(),now(),1),(UUID(),'こんばんは', 1, '{}',now(),now(),1),(UUID(),'お疲れ様です', 1, '{}',now(),now(),1),(UUID(),'ありがとう', 1, '{}',now(),now(),1),(UUID(),'どういたしまして', 1, '{}',now(),now(),1),(UUID(),'おはよう', 1, '{}',now(),now(),1),(UUID(),'こんなことないね', 1, '{}',now(),now(),1),(UUID(),'お元気ですか？', 1, '{}',now(),now(),1),(UUID(),'失礼しました', 1, '{}',now(),now(),1),(UUID(),'よろしくお願いします', 1, '{}',now(),now(),1),(UUID(),'お誕生日おめでとう', 1, '{}',now(),now(),1),(UUID(),'お久しぶりです', 1, '{}',now(),now(),1),(UUID(),'おやすみなさい', 1, '{}',now(),now(),1),(UUID(),'ごめんなさい', 1, '{}',now(),now(),1),(UUID(),'お願いします', 1, '{}',now(),now(),1),(UUID(),'どうもありがとう', 1, '{}',now(),now(),1),(UUID(),'お邪魔します', 1, '{}',now(),now(),1),(UUID(),'いいえ、どういたしまして', 1, '{}',now(),now(),1),(UUID(),'お気をつけて', 1, '{}',now(),now(),1),(UUID(),'お早うございます', 1, '{}',now(),now(),1),(UUID(),'お疲れ様でした', 1, '{}',now(),now(),1),(UUID(),'ごめん、遅れました', 1, '{}',now(),now(),1),(UUID(),'お幸せをお祈りします', 1, '{}',now(),now(),1),(UUID(),'よくやった', 1, '{}',now(),now(),1),(UUID(),'お見舞い申し上げます', 1, '{}',now(),now(),1),(UUID(),'ごめん、迷子になりました', 1, '{}',now(),now(),1),(UUID(),'こんにちは、元気ですか？', 1, '{}',now(),now(),1),(UUID(),'これをあげます', 1, '{}',now(),now(),1),(UUID(),'おめでとうございます', 1, '{}',now(),now(),1),(UUID(),'行ってきます', 1, '{}',now(),now(),1),(UUID(),'お大事に', 1, '{}',now(),now(),1),(UUID(),'お足元気を', 1, '{}',now(),now(),1),(UUID(),'お先にどうぞ', 1, '{}',now(),now(),1),(UUID(),'こんにちは、お元気ですか？', 1, '{}',now(),now(),1),(UUID(),'また会いましょう', 1, '{}',now(),now(),1),(UUID(),'ごめんなさい、遅くなりました', 1, '{}',now(),now(),1),(UUID(),'ごちそうさま', 1, '{}',now(),now(),1),(UUID(),'お早うございます、元気ですか？', 1, '{}',now(),now(),1),(UUID(),'お大丈夫ですか？', 1, '{}',now(),now(),1),(UUID(),'どうぞお幸せを', 1, '{}',now(),now(),1),(UUID(),'お呼びすることはできますか？', 1, '{}',now(),now(),1),(UUID(),'よろしくお願いします、お手伝いできますか？', 1, '{}',now(),now(),1),(UUID(),'ごめん、今お忙しい？', 1, '{}',now(),now(),1),(UUID(),'おかげでうれしいです', 1, '{}',now(),now(),1),(UUID(),'どういたしまして、お役に立ててうれしいです', 1, '{}',now(),now(),1),(UUID(),'おめでとう、成功を祈っています', 1, '{}',now(),now(),1),(UUID(),'お祝い申し上げます', 1, '{}',now(),now(),1),(UUID(),'ごめん、待たせてしまいました', 1, '{}',now(),now(),1),(UUID(),'お大事にしてください', 1, '{}',now(),now(),1),(UUID(),'お足元に気をつけて', 1, '{}',now(),now(),1),(UUID(),'お先に失礼します', 1, '{}',now(),now(),1),(UUID(),'こんにちは、元気でしょうか？', 1, '{}',now(),now(),1),(UUID(),'これを差し上げます', 1, '{}',now(),now(),1),(UUID(),'お疲れ様、よくやりました', 1, '{}',now(),now(),1),(UUID(),'お大丈夫ですか？', 1, '{}',now(),now(),1),(UUID(),'どうぞお幸せに', 1, '{}',now(),now(),1),(UUID(),'お呼びすることはできますか？', 1, '{}',now(),now(),1),(UUID(),'よろしくお願いします、お手伝いできますか？', 1, '{}',now(),now(),1),(UUID(),'ごめん、今お忙しい？', 1, '{}',now(),now(),1),(UUID(),'おかげでうれしいです', 1, '{}',now(),now(),1),(UUID(),'どういたしまして、お役に立ててうれしいです', 1, '{}',now(),now(),1);
INSERT INTO `Quizzes` (`id`, `content`, `level`, `option`, `create_at`, `update_at`, `quiz_type_id`) VALUES (UUID(), 'お元気ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お名前は何ですか？', 2, '{}', now(), now(), 1),(UUID(), '何をしていますか？', 2, '{}', now(), now(), 1),(UUID(), 'どこから来ましたか？', 2, '{}', now(), now(), 1),(UUID(), 'いつ会いましょうか？', 2, '{}', now(), now(), 1),(UUID(), 'これは何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'どれがお好きですか？', 2, '{}', now(), now(), 1),(UUID(), 'これはいくらですか？', 2, '{}', now(), now(), 1),(UUID(), '今日は何曜日ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事は何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お誕生日はいつですか？', 2, '{}', now(), now(), 1),(UUID(), '何がお好きですか？', 2, '{}', now(), now(), 1),(UUID(), 'いくつ歳ですか？', 2, '{}', now(), now(), 1),(UUID(), 'どの学校に行っていますか？', 2, '{}', now(), now(), 1),(UUID(), 'お住まいはどちらですか？', 2, '{}', now(), now(), 1),(UUID(), '何かお手伝いできますか？', 2, '{}', now(), now(), 1),(UUID(), 'どの本が好きですか？', 2, '{}', now(), now(), 1),(UUID(), '何時に起きますか？', 2, '{}', now(), now(), 1),(UUID(), 'いくつ兄弟姉妹がいますか？', 2, '{}', now(), now(), 1),(UUID(), '今日の天気はどうですか？', 2, '{}', now(), now(), 1),(UUID(), 'お出かけですか？', 2, '{}', now(), now(), 1),(UUID(), 'お昼ごはんは何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'おすすめのレストランはありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お風呂は好きですか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒は飲みますか？', 2, '{}', now(), now(), 1),(UUID(), 'お金を節約する方法はありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お腹が空きましたか？', 2, '{}', now(), now(), 1),(UUID(), 'お誕生日プレゼントは何がほしいですか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒の好みはありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お風呂上りに何か食べますか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事は忙しいですか？', 2, '{}', now(), now(), 1),(UUID(), 'お弁当を持っていますか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒は控えていますか？', 2, '{}', now(), now(), 1),(UUID(), 'お腹がすいたら何を食べますか？', 2, '{}', now(), now(), 1),(UUID(), 'お昼寝をしますか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒を飲む機会はありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事が終わったら何をしますか？', 2, '{}', now(), now(), 1),(UUID(), 'お弁当作りが好きですか？', 2, '{}', now(), now(), 1),(UUID(), 'お腹が空いたら何を食べたいですか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事でストレスを感じますか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒の席で何を話しますか？', 2, '{}', now(), now(), 1),(UUID(), 'お料理は得意ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お昼ごはんに何を食べましたか？', 2, '{}', now(), now(), 1),(UUID(), 'お金の節約方法を教えてください', 2, '{}', now(), now(), 1),(UUID(), 'お誕生日はどの季節ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お風呂で何をして過ごしますか？', 2, '{}', now(), now(), 1),(UUID(), 'お腹がいっぱいですか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事の休みに何をしますか？', 2, '{}', now(), now(), 1),(UUID(), 'お料理のアレルギーはありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お出かけの予定はありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お金の使い道は何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お風呂は朝入りますか？夜入りますか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒は飲むことがありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事に行く前に何をしていますか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事でどのようなことをしていますか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事のストレス解消方法は何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お腹が空いたら何を食べますか？', 2, '{}', now(), now(), 1),(UUID(), 'お誕生日プレゼントに何が欲しいですか？', 2, '{}', now(), now(), 1),(UUID(), 'お出かけの際に持参するものは何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お昼ごはんに何を食べたいですか？', 2, '{}', now(), now(), 1),(UUID(), 'お料理で得意なものは何ですか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事の忙しさはどうですか？', 2, '{}', now(), now(), 1),(UUID(), 'お弁当を作ることは好きですか？', 2, '{}', now(), now(), 1),(UUID(), 'お金を節約するために何をしていますか？', 2, '{}', now(), now(), 1),(UUID(), 'お酒を控えることがありますか？', 2, '{}', now(), now(), 1),(UUID(), 'お風呂上りに何を食べますか？', 2, '{}', now(), now(), 1),(UUID(), 'お仕事が終わったら何をしますか？', 2, '{}', now(), now(), 1);



INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id`) VALUES 
(UUID(),'私はボードゲームが趣味で、特にカタンのような戦略ゲームが楽しいと思っています。あなたもボードゲームが好きですか？もしそうなら、お気に入りのボードゲームは何ですか？', 3, '{}',now(),now(),1),
(UUID(),'私はサーフィンが趣味で、特にハワイで波に乗るのが最高だと思っています。サーフィンに興味はありますか？もしそうなら、最後にどのビーチでサーフィンを楽しんだことがありますか？', 3, '{}',now(),now(),1),
(UUID(),'私は宇宙探査が大好きで、特にNASAのミッションに関する情報収集が面白いと思っています。宇宙に興味はありますか？もしそうなら、最後にどの宇宙関連の本を読みましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はアニメが趣味で、特に「鬼滅の刃」のような人気アニメが楽しいと思っています。アニメに興味はありますか？もしそうなら、最後にどのアニメシリーズを観ましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はサイクリングが好きで、特に山岳地帯での長距離サイクリングが楽しいと思っています。自転車に興味はありますか？もしそうなら、最後にどの山岳地帯でサイクリングを楽しんだことがありますか？', 3, '{}',now(),now(),1),
(UUID(),'私は航空機に興味があり、特にボーイング787の設計に魅了されています。航空機に興味はありますか？もしそうなら、最後にどの航空ショーに参加したことがありますか？', 3, '{}',now(),now(),1),
(UUID(),'私はアウトドアアクティビティが好きで、特にキャンプでの星空観察が楽しいと思っています。アウトドア活動に興味はありますか？もしそうなら、最後にどの国立公園でキャンプを楽しんだことがありますか？', 3, '{}',now(),now(),1),
(UUID(),'私は車のレースが好きで、特にフォーミュラ1のレースが興奮させると思っています。モータースポーツに興味はありますか？もしそうなら、お気に入りのフォーミュラ1ドライバーは誰ですか？', 3, '{}',now(),now(),1),
(UUID(),'私はテニスが趣味で、特にウィンブルドン選手権の試合を楽しみにしています。テニスに興味はありますか？もしそうなら、最後にどのテニストーナメントを観戦しましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は料理が得意で、特に寿司の手巻きを作るのが楽しいと思っています。料理に興味はありますか？もしそうなら、最後にどんな料理を自分で作りましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はバイオロジーが好きで、特に生態学の研究が興味深いと思っています。科学に興味はありますか？もしそうなら、最後にどの自然保護区で生態学の調査を行いましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は音楽が趣味で、特にクラシック音楽のコンサートに出席するのが楽しいと思っています。音楽に興味はありますか？もしそうなら、最後にどのクラシック音楽のコンサートに行きましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はゴルフが好きで、特に週末にゴルフコースでプレーするのが楽しいと思っています。ゴルフに興味はありますか？もしそうなら、最後にどのゴルフコースでプレーしましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は文学が好きで、特にハリー・ポッターシリーズのファンです。本を読むことに興味はありますか？もしそうなら、最後にどのハリー・ポッターの本を読みましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は宇宙探査が大好きで、特に火星探査に関するニュースを追いかけるのが楽しいと思っています。宇宙に興味はありますか？もしそうなら、最後にどの宇宙探査のニュースを読みましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は自転車旅行が趣味で、特にヨーロッパの自転車道を走るのが楽しいと思っています。自転車に興味はありますか？もしそうなら、最後にどの国の自転車道を走りましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は映画鑑賞が好きで、特にスタジオジブリのアニメーション映画が素晴らしいと思っています。映画に興味はありますか？もしそうなら、最後にどのスタジオジブリ映画を観ましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はクッキングショーが好きで、特に「マスターシェフ」のシリーズが楽しいと思っています。料理番組を見るのが好きですか？もしそうなら、最後にどのクッキングショーを観ましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はハイキングが趣味で、特に山岳地帯でのトレッキングが楽しいと思っています。ハイキングに興味はありますか？もしそうなら、最後にどの山にハイキングに行きましたか？', 3, '{}',now(),now(),1);
INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id`) VALUES 
(UUID(),'私はボードゲームが大好きで、特に「カタン」が楽しいと思っています。あなたもボードゲームが好きですか？もしそうなら、お気に入りのボードゲームは何ですか？', 3, '{}',now(),now(),1),
(UUID(),'私はアウトドア活動が好きで、特にキャンプが楽しいと思っています。アウトドア活動に興味はありますか？もしそうなら、最後にどの場所でキャンプをしましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は宇宙探査に興味があり、特にNASAのミッションに関する情報収集が面白いと思っています。宇宙に興味はありますか？もしそうなら、最後にどの宇宙ミッションについて読みましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は映画鑑賞が好きで、特にアクション映画が興奮させると思っています。映画に興味はありますか？もしそうなら、最後にどのアクション映画を観ましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は音楽が趣味で、特にクラシック音楽の演奏が感動的だと思っています。音楽に興味はありますか？もしそうなら、最後にどのクラシック音楽のコンサートに行きましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は読書が好きで、特にミステリー小説が面白いと思っています。読書に興味はありますか？もしそうなら、最後にどのミステリー小説を読みましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はサイクリングが趣味で、特に山岳地帯でのライドが楽しいと思っています。自転車に興味はありますか？もしそうなら、最後にどの山岳地帯でサイクリングを楽しんだことがありますか？', 3, '{}',now(),now(),1),
(UUID(),'私は自動車のメカニックが好きで、特に古典車の修理が楽しいと思っています。自動車に詳しいですか？もしそうなら、最後にどの車を修理しましたか？', 3, '{}',now(),now(),1),
(UUID(),'私は料理が得意で、特にインド料理のレシピを試すのが楽しいと思っています。料理に興味はありますか？もしそうなら、最後にどんなインド料理を作りましたか？', 3, '{}',now(),now(),1),
(UUID(),'私はテニスが好きで、特に全仏オープンの試合を楽しみにしています。テニスに興味はありますか？もしそうなら、最後にどのテニストーナメントを観戦しましたか？', 3, '{}',now(),now(),1);


INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id`) VALUES 
(UUID(),"How's your day going?", 4, '{}',now(),now(),1),
(UUID(),"What's the plan for the weekend?", 4, '{}',now(),now(),1),
(UUID(),"Have you had lunch/dinner yet?", 4, '{}',now(),now(),1),
(UUID(),"How's your family doing?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite place to hang out?", 4, '{}',now(),now(),1),
(UUID(),"Do you have any upcoming travel plans?", 4, '{}',now(),now(),1),
(UUID(),"What's your go-to comfort food?", 4, '{}',now(),now(),1),
(UUID(),"What do you like to do in your free time?", 4, '{}',now(),now(),1),
(UUID(),"How's the weather today?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite TV show or series?", 4, '{}',now(),now(),1),
(UUID(),"How's your work/school going?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of cuisine?", 4, '{}',now(),now(),1),
(UUID(),"Do you like outdoor activities?", 4, '{}',now(),now(),1),
(UUID(),"What's the last book you read?", 4, '{}',now(),now(),1),
(UUID(),"Have you ever been to a music concert?", 4, '{}',now(),now(),1),
(UUID(),"What's your dream vacation destination?", 4, '{}',now(),now(),1),
(UUID(),"Do you enjoy cooking?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite season of the year?", 4, '{}',now(),now(),1),
(UUID(),"Have you made any new friends recently?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of music?", 4, '{}',now(),now(),1),
(UUID(),"How do you relax after a long day?", 4, '{}',now(),now(),1),
(UUID(),"What's your most memorable travel experience?", 4, '{}',now(),now(),1),
(UUID(),"Do you have any pets?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite holiday or celebration?", 4, '{}',now(),now(),1),
(UUID(),"How's your current job or project?", 4, '{}',now(),now(),1),
(UUID(),"What's the last movie you watched?", 4, '{}',now(),now(),1),
(UUID(),"Do you like to exercise or stay active?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of exercise?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of cuisine?", 4, '{}',now(),now(),1),
(UUID(),"How do you like to spend a rainy day?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite childhood memory?", 4, '{}',now(),now(),1),
(UUID(),"Have you ever learned a new language?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of art or artwork?", 4, '{}',now(),now(),1),
(UUID(),"How do you stay motivated?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of dessert?", 4, '{}',now(),now(),1),
(UUID(),"Do you enjoy gardening or taking care of plants?", 4, '{}',now(),now(),1),
(UUID(),"What's the most interesting place you've visited?", 4, '{}',now(),now(),1),
(UUID(),"How's your commute to work or school?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of coffee or tea?", 4, '{}',now(),now(),1),
(UUID(),"What's the last adventure you went on?", 4, '{}',now(),now(),1),
(UUID(),"Do you have a favorite local restaurant?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of weather?", 4, '{}',now(),now(),1),
(UUID(),"How do you like to spend your evenings?", 4, '{}',now(),now(),1),
(UUID(),"What's the last interesting fact you learned?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite type of museum to visit?", 4, '{}',now(),now(),1),
(UUID(),"Do you have any upcoming plans for the year?", 4, '{}',now(),now(),1),
(UUID(),"What's your favorite way to unwind or relax?", 4, '{}',now(),now(),1);


INSERT INTO `Quizzes` (`id`,`content`,`level`,`option`,`create_at`,`update_at`,`quiz_type_id`) VALUES
(UUID(),"I'm really into gardening, especially growing roses. Have you ever tried gardening as a hobby?", 5, "{}", now(), now(), 1),
(UUID(),"Photography has been a passion of mine for years. What's your favorite subject to photograph?", 5, "{}", now(), now(), 1),
(UUID(),"I recently started collecting vintage vinyl records. Do you collect anything as a hobby?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a big fan of birdwatching. Have you ever spotted a rare bird?", 5, "{}", now(), now(), 1),
(UUID(),"I enjoy hiking in the mountains. What's the most breathtaking view you've experienced while hiking?", 5, "{}", now(), now(), 1),
(UUID(),"Sculpting is a fascinating hobby. Have you ever tried your hand at creating art?", 5, "{}", now(), now(), 1),
(UUID(),"I've been practicing martial arts for years. Are you interested in self-defense or martial arts?", 5, "{}", now(), now(), 1),
(UUID(),"I love to cook and experiment with new recipes. What's your favorite dish to prepare?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a huge fan of Formula 1 racing. Do you follow any sports events regularly?", 5, "{}", now(), now(), 1),
(UUID(),"I'm an avid reader and currently engrossed in a classic novel. What's your all-time favorite book?", 5, "{}", now(), now(), 1),
(UUID(),"I've taken up painting as a hobby recently. Do you appreciate visual arts or have any favorite painters?", 5, "{}", now(), now(), 1),
(UUID(),"I enjoy astronomy and stargazing. What's the most beautiful celestial object you've observed?", 5, "{}", now(), now(), 1),
(UUID(),"I love scuba diving and exploring the underwater world. Have you ever tried diving or snorkeling?", 5, "{}", now(), now(), 1),
(UUID(),"I'm passionate about classic cars and restoration projects. Do you have any interest in automobiles?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a collector of antique coins. Are you interested in numismatics or collecting anything?", 5, "{}", now(), now(), 1),
(UUID(),"I enjoy solving jigsaw puzzles as a relaxing hobby. What do you like to do in your free time?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a dedicated gardener and love discussing different plant species. Do you have any houseplants?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a board game enthusiast and host game nights with friends. Do you enjoy playing board games?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a big fan of science fiction, especially the works of Isaac Asimov. Do you like reading sci-fi books?", 5, "{}", now(), now(), 1),
(UUID(),"I'm passionate about wine tasting. What's your favorite type of wine or beverage?", 5, "{}", now(), now(), 1),
(UUID(),"I'm an amateur astronomer and have my own telescope. Have you ever looked through a telescope?", 5, "{}", now(), now(), 1),
(UUID(),"I'm into DIY woodworking and have made several pieces of furniture. Do you have any DIY projects?", 5, "{}", now(), now(), 1),
(UUID(),"I love mountain biking in my free time. What outdoor activities do you enjoy?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a history buff, especially ancient civilizations. What's your favorite historical era?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a dedicated video gamer and currently playing 'The Elder Scrolls.' Do you play video games?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a fan of classic rock music. Who's your favorite music artist or band?", 5, "{}", now(), now(), 1),
(UUID(),"I've recently taken up knitting as a relaxing hobby. Do you enjoy any crafting activities?", 5, "{}", now(), now(), 1),
(UUID(),"I'm passionate about yoga and practice it regularly. Do you have any fitness or wellness routines?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a nature lover and enjoy birdwatching. Have you had any memorable encounters with wildlife?", 5, "{}", now(), now(), 1),
(UUID(),"I'm into coin collecting. Have you ever come across rare or unique coins?", 5, "{}", now(), now(), 1),
(UUID(),"I enjoy cooking international dishes. What's the most exotic cuisine you've tried?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a movie buff and love discussing film classics. What's your favorite movie genre?", 5, "{}", now(), now(), 1),
(UUID(),"I'm passionate about photography. Do you have a favorite photography subject?", 5, "{}", now(), now(), 1),
(UUID(),"I'm an outdoor enthusiast and love hiking. What's your preferred outdoor activity?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a history enthusiast and visit museums often. Are you interested in history or museums?", 5, "{}", now(), now(), 1),
(UUID(),"I enjoy fishing in my free time. Have you ever caught a particularly large or unique fish?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a fan of science documentaries. What's the most fascinating scientific discovery you've learned about?", 5, "{}", now(), now(), 1),
(UUID(),"I love playing the piano. Do you have any musical talents or play any instruments?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a puzzle enthusiast and enjoy solving brain teasers. What's your favorite type of puzzle?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a passionate cyclist and participate in long-distance rides. Do you enjoy cycling?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a collector of vintage comic books. Are you a collector of anything unique or nostalgic?", 5, "{}", now(), now(), 1),
(UUID(),"I'm a dedicated hiker and enjoy exploring different trails. What's your favorite hiking destination?", 5, "{}", now(), now(), 1),
(UUID(),"I'm an astronomy enthusiast and often stargaze. Have you seen any memorable astronomical events?", 5, "{}", now(), now(), 1),
(UUID(),"I enjoy playing chess. Do you have any favorite strategy or board games?", 5, "{}", now(), now(), 1),
(UUID(),"I'm passionate about scuba diving and exploring coral reefs. Have you ever experienced underwater wonders?", 5, "{}", now(), now(), 1)