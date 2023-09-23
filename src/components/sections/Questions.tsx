import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Questions  = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I work on a project I started before the hackathon?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nam rem voluptatem delectus, 
        fuga numquam harum enim itaque expedita perferendis quisquam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What happens if I need help during the hackathon?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nam rem voluptatem delectus, 
        fuga numquam harum enim itaque expedita perferendis quisquam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What happens if I don't have an idea for a project?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nam rem voluptatem delectus, 
        fuga numquam harum enim itaque expedita perferendis quisquam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can I join a team or do I have to come with one?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nam rem voluptatem delectus, 
        fuga numquam harum enim itaque expedita perferendis quisquam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What happens after the hackathon ends?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nam rem voluptatem delectus, 
        fuga numquam harum enim itaque expedita perferendis quisquam.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I work on a project I started before the hackathon?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Nam rem voluptatem delectus, 
        fuga numquam harum enim itaque expedita perferendis quisquam.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Questions 