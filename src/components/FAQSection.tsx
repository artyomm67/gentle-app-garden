import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  { q: "Это безопасно?", a: "Да, полностью. Мы используем официальные способы оплаты и не запрашиваем данные ваших аккаунтов. Подписка оформляется на ваш email." },
  { q: "Сколько времени занимает подключение?", a: "Обычно от 5 до 15 минут после оплаты. В редких случаях — до 1 часа." },
  { q: "Какие способы оплаты вы принимаете?", a: "Перевод на карту (СБП), криптовалюта, ЮMoney и другие удобные способы из России." },
  { q: "Можно ли продлить подписку через вас?", a: "Да, вы можете продлять подписку каждый месяц. Напишите нам за 1–2 дня до окончания." },
  { q: "Что делать, если возникли проблемы?", a: "Напишите нам в Telegram — решаем вопросы оперативно. Поддержка работает с 9:00 до 23:00 МСК." },
];

const FAQSection = () => (
  <section className="py-20 md:py-24">
    <div className="container max-w-2xl">
      <SectionHeader
        eyebrow="FAQ"
        title="Частые вопросы перед первой оплатой"
        description="Ясные ответы снимают сомнения и уменьшают трение перед первым заказом."
      />

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card-glow rounded-[1.25rem] px-6 border-none">
            <AccordionTrigger className="text-left font-bold hover:no-underline py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
