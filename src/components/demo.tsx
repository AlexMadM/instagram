import {
    Select,
    SelectContent,
    SelectGroup, SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select/select";

export function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem className="menuItem" value="apple">Apple</SelectItem>
                    <SelectItem className="menuItem" value="banana">Banana</SelectItem>
                    <SelectItem className="menuItem" value="blueberry">Blueberry</SelectItem>
                    <SelectItem className="menuItem" value="grapes">Grapes</SelectItem>
                    <SelectItem className="menuItem" value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}