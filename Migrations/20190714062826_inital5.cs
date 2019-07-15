using Microsoft.EntityFrameworkCore.Migrations;

namespace TokenSystem.Migrations
{
    public partial class inital5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_NumberTest",
                table: "NumberTest");

            migrationBuilder.RenameTable(
                name: "NumberTest",
                newName: "NumberTests");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NumberTests",
                table: "NumberTests",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_NumberTests",
                table: "NumberTests");

            migrationBuilder.RenameTable(
                name: "NumberTests",
                newName: "NumberTest");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NumberTest",
                table: "NumberTest",
                column: "Id");
        }
    }
}
