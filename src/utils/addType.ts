import { EntrySkeletonType } from "contentful";
import { IChronologyFields, IProfileFields } from "./@types/generated/contentful";

export type TypeChronologySkeleton = EntrySkeletonType<IChronologyFields, "chronology">;
export type TypeProfileSkeleton = EntrySkeletonType<IProfileFields, "profile">;
