import { basicFont, black, darkGray, titleFont } from "./globals";

const { widget } = figma

const { useSyncedState, Input, AutoLayout, Text, Line } = widget

export function NameBackground() {
	const [name, setName] = useSyncedState('name', '')
	const [background, setBackground] = useSyncedState('bg', '')

	return (
		<AutoLayout direction='vertical'
		padding={{horizontal: 8, vertical: 4}}
			spacing={{vertical: 2}}
			stroke={black}
			cornerRadius={8}
			width={200}
		>
			<AutoLayout
				direction='horizontal'
				verticalAlignItems="center"
			>
				<Text
					fontSize={12}
					fontFamily={titleFont}
					fontWeight={700}
					width={44}
				>
					Name
				</Text>
				<Input
					value={name}
					placeholder='Name here'
					onTextEditEnd={(e) => {
						setName(e.characters);
					}}
					fill={black}
					width='fill-parent'
					fontSize={16}
					fontFamily={basicFont}
					inputBehavior="wrap"
				/>
			</AutoLayout>
			<Line length='fill-parent'/>
			<AutoLayout
				direction='horizontal'
				verticalAlignItems="center"
			>
				<Text
					fontSize={6}
					fontFamily={titleFont}
					fontWeight={700}
					width={44}
					fill={darkGray}
				>
					Background
				</Text>
				<Input
					value={background}
					placeholder='Character description'
					onTextEditEnd={(e) => {
						setBackground(e.characters);
					}}
					fill={black}
					width='fill-parent'
					fontSize={8}
					fontFamily={basicFont}
					inputBehavior="wrap"
				/>
				</AutoLayout>
		</AutoLayout>
	)
}