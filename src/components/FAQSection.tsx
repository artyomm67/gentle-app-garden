import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Это безопасно?", a: "Да, полностью. Мы используем официальные способы оплаты и не запрашиваем данные ваших аккаунтов. Подписка оформляется на ваш email." },
  { q: "Сколько времени занимает подключение?", a: "Обычно от 5 до 15 минут после оплаты. В редких случаях — до 1 часа." },
  { q: "Какие способы оплаты вы принимаете?", a: "Перевод на карту (СБП), криптовалюта, ЮMoney и другие удобные способы из России." },
  { q: "Можно ли продлить подписку через вас?", a: "Да, вы можете продлять подписку каждый месяц. Напишите нам за 1–2 дня до окончания." },
  { q: "Что делать, если возникли проблемы?", a: "Напишите нам в Telegram — решаем вопросы оперативно. Поддержка работает с 9:00 до 23:00 МСК." },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container max-w-2xl">
      <p className="text-sm text-primary font-semibold mb-2">FAQ</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Частые вопросы</h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-[1.25rem] px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
